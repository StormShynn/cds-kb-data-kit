---
name: I_CONTROLLINGBUSTRANSACTYPET
description: Controllingbustransactypet
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_CONTROLLINGBUSTRANSACTYPET

**Controllingbustransactypet**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessTransactionType` | ✓ | |  | `vrgng` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `BusinessTransactionTypeName` |  | |  | `txt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Ctrlg Business Transaction Type - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'BusinessTransactionType'
@Analytics.technicalName: 'IFICOBUSTRANTYT'
@ObjectModel: {dataCategory: #TEXT,
               usageType.serviceQuality: #A,
               usageType.sizeCategory: #M,
               usageType.dataClass: #CUSTOMIZING,
               supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE],
               modelingPattern: #LANGUAGE_DEPENDENT_TEXT }               
           
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true

define view entity I_ControllingBusTransacTypeT
  as select from tj01t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key tj01t.vrgng as BusinessTransactionType,
      @Semantics.language
  key tj01t.spras as Language,
      @Semantics.text: true
      tj01t.txt   as BusinessTransactionTypeName,
      _Language
};
```
