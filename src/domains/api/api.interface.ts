export interface EntityEndpoint {
  url: string;
  name: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: EntityEndpoint[];
}

interface PokemonAbility {
  ability: EntityEndpoint;
  is_hidden: boolean;
  slot: number;
}

interface PokemonGameIndex {
  game_index: number;
  version: EntityEndpoint;
}

interface PokemonHeldItem {
  item: EntityEndpoint;
  version_details: PokemonHeldItemVersion[];
}

interface PokemonHeldItemVersion {
  rarity: number;
  version: EntityEndpoint;
}

interface PokemonMoveVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: EntityEndpoint;
  version_froup: EntityEndpoint;
}

interface PokemonMove {
  move: EntityEndpoint;
  version_group_details: PokemonMoveVersionGroupDetail[];
}

interface PokemonType {
  slot: string;
  type: EntityEndpoint;
}
interface PokemonPastType {
  generation: EntityEndpoint;
  types: PokemonType[];
}

type PokemonSprites = Record<string, string | null | { [key: string]: PokemonSprites }>;

interface PokemonStat {
  base_stat: string;
  effort: string;
  stat: EntityEndpoint;
}

export interface PokemonResponse {
  id: string;
  abilities: PokemonAbility[];
  base_experience: string;
  forms: EntityEndpoint[];
  game_indices: PokemonGameIndex[];
  height: string;
  held_items: PokemonHeldItem[];
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: string;
  past_types: PokemonPastType[];
  species: EntityEndpoint;
  sprites: PokemonSprites;
  types: PokemonType[];
  weight: string;
  stats: PokemonStat[];
}
