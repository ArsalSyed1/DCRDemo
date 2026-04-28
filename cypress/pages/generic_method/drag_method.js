class DragMethod {
     clickAndDragElement(selector, offsetX, offsetY) {
        return cy.get(selector)
            .should('exist')
            .then(($element) => {
                const currentPosition = $element[0].getBoundingClientRect();
                const dataTransfer = new DataTransfer();
                // Wait for 5 seconds before starting drag
                return cy.wait(5000).then(() => {
                    return cy.wrap($element)
                        .trigger('mousedown', {force: true,
                            button: 0,
                            clientX: currentPosition.left,
                            clientY: currentPosition.top,
                            dataTransfer
                        })
                        .trigger('mousemove', {force: true,
                            button: 0,
                            clientX: currentPosition.left + offsetX,
                            clientY: currentPosition.top + offsetY,
                            dataTransfer
                        })
                        .trigger('mouseup', {force: true,
                            button: 0,
                            clientX: currentPosition.left + offsetX,
                            clientY: currentPosition.top + offsetY,
                            dataTransfer
                        });
                });
            });
        }


        scrollToElement(selector) {
           return cy.get(selector)
                .should('exist')
                .scrollIntoView();
                
        }
}

export default new DragMethod();