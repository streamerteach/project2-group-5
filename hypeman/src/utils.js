export function getExerciseDescription(program, difficultyRating) {
    var stretchingTime = 1;
    if (!program || isNaN(difficultyRating)) return [];
  
    switch (program) {
      case 'Stretching':
        return [
          `Spin head around in circles to stretch neck muscles for ${stretchingTime} minutes`,
          `Stretch legs by crossing them and leaning forward for ${stretchingTime} minutes`,
          `Lean forward and touch toes to stretch hamstrings for ${stretchingTime} minutes`,
        ];
      case 'Calisthenics':
        return [
          `Do ${difficultyRating*5} pushups`,
          `Do ${difficultyRating*7} situps`,
          `Do ${difficultyRating*10} squats`,
        ];
      case 'Weights':
        return [
          `Do ${difficultyRating*3} bench presses`,
          `Do ${difficultyRating*5} bicep curls`,
          `Do ${difficultyRating*6} shoulder presses`,
        ];
      case 'HIIT':
        return [
          `Do ${difficultyRating*15} burpees`,
          `Do ${difficultyRating*10} jumping jacks`,
          `Do ${difficultyRating*8} mountain climbers`,
        ];
      default:
        return [];
    }
  }
  