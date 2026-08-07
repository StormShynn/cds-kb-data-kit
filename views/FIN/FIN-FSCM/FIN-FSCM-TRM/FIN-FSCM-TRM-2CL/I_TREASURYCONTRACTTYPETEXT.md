---
name: I_TREASURYCONTRACTTYPETEXT
description: Treasurycontracttypetext
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - contract
  - text
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYCONTRACTTYPETEXT

**Treasurycontracttypetext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |
| `TreasuryContractType` | ✓ | |  | `cast( dd07t.domvalue_l as rantyp )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `TreasuryContractTypeName` |  | |  | `cast( dd07t.ddtext as rantyp_name preserving type )` |
| `_ContractType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ContractType` | `I_TreasuryContractType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ITRSYCONTRTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Treasury Contract Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TreasuryContractType'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'TreasuryContractTypeText'

define view I_TreasuryContractTypeText 
  as select from dd07t
  association [0..1] to I_TreasuryContractType as _ContractType on $projection.TreasuryContractType = _ContractType.TreasuryContractType
  association [0..1] to I_Language             as _Language     on $projection.Language             = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )   as Language, 
      @ObjectModel.foreignKey.association: '_ContractType'
      @ObjectModel.text.element: ['TreasuryContractTypeName']
  key cast( dd07t.domvalue_l as rantyp )                  as TreasuryContractType,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                    as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as rantyp_name preserving type ) as TreasuryContractTypeName,
      
      _ContractType,
      _Language
} 
where dd07t.domname  = 'RANTYP'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
