/**
 * Função para mostrar as informações do cartão
 * @param {HTMLElement} card 
 */
function showInfo(card) {
    alert(card.getAttribute('data-info'));
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.setAttribute('tabindex', '0');
  
      card.addEventListener('click', () => showInfo(card));
  
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showInfo(card);
        }
      });
    });
  
    const buttons = document.querySelectorAll('#quiz button');
    const feedback = document.getElementById('quizFeedback');
    const correctAnswer = "Sensores Inteligentes";
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const userAnswer = button.getAttribute('data-answer');
        if (userAnswer === correctAnswer) {
          feedback.textContent = "Parabéns! Você acertou. Sensores inteligentes são essenciais para monitorar solo e clima em tempo real.";
          feedback.style.color = '#2a7a1f';
        } else {
          feedback.textContent = "Ops, tente novamente! Pense nas tecnologias que coletam dados diretamente do campo.";
          feedback.style.color = '#a12a2a';
        }
      });
    });
  });
  
  