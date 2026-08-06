---
name: I_CONTRACCTPRTNRELSHPTYPETXT
description: Contracctprtnrelshptypetxt
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CONTRACCTPRTNRELSHPTYPETXT

**Contracctprtnrelshptypetxt**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CARelationshipOfBPToContrAcct` | `vkpbz` |
| key `Language` | `spras` |
| `CARelshpOfBPToContrAcctName` | `text` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Contract Acct Partner Relshp Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CARelationshipOfBPToContrAcct',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_ContrAcctPrtnRelshpTypeTxt
  as select from tfk002ft
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key vkpbz  as CARelationshipOfBPToContrAcct,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras  as Language,

      @Semantics.text
      text   as CARelshpOfBPToContrAcctName,

      _Language
}
```
