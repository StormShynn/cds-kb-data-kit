---
name: I_FINTRANSCNTRLCLRGOPTIONTEXT
description: "Fintranscntrlclrgoptiontext"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSCNTRLCLRGOPTIONTEXT

**Fintranscntrlclrgoptiontext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `FinTransCentralClearingOption` | ✓ | |  | `cast( dd07t.domvalue_l as tpm_trea_clearing_opt )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `FinTransCntrlClrgOptionName` |  | |  | `cast( dd07t.ddtext as tpm_trea_clearing_opt_name preserving type )` |  |  |
| `_CentralClearingOption` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralClearingOption` | `I_FinTransCntrlClrgOption` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFTCENCLEAROPTT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fin Trans Central Clearing Option - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'FinTransCentralClearingOption'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_FinTransCntrlClrgOptionText 
  as select from dd07t
  association [0..1] to I_FinTransCntrlClrgOption as _CentralClearingOption on $projection.FinTransCentralClearingOption = _CentralClearingOption.FinTransCentralClearingOption
  association [0..1] to I_Language                as _Language              on $projection.Language                      = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                  as Language, 
      @ObjectModel.foreignKey.association: '_CentralClearingOption'
      @ObjectModel.text.element: ['FinTransCntrlClrgOptionName']
  key cast( dd07t.domvalue_l as tpm_trea_clearing_opt )                  as FinTransCentralClearingOption,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                   as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as tpm_trea_clearing_opt_name preserving type ) as FinTransCntrlClrgOptionName,

      _CentralClearingOption,
      _Language
} 
where dd07t.domname  = 'TPM_TREA_CLEARING_OPT'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
