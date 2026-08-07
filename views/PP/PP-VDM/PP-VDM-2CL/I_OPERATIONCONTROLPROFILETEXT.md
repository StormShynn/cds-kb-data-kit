---
name: I_OPERATIONCONTROLPROFILETEXT
description: Operationcontrolprofiletext
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_OPERATIONCONTROLPROFILETEXT

**Operationcontrolprofiletext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `OperationControlProfile` | ✓ | |  | `cast(txt.steus as pph_steus preserving type)` |  |  |
| `OperationControlProfileName` |  | |  | `cast(txt.txt as pph_steutxt preserving type)` |  |  |
| `_Profile` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Profile` | `I_OperationControlProfile` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPOPCONTPROFTXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'OperationControlProfile'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Operation Control Profile - Text'

define view I_OperationControlProfileText
  as select from t430t as txt
  
  association [1..1] to I_OperationControlProfile as _Profile  on $projection.OperationControlProfile     = _Profile.OperationControlProfile
  association [0..1] to I_Language                as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key txt.spras                                                      as Language,
      @ObjectModel.foreignKey.association: '_Profile'  
      @ObjectModel.text.element: ['OperationControlProfileName']
  key cast(txt.steus as pph_steus preserving type)                   as OperationControlProfile,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.txt as pph_steutxt preserving type)                   as OperationControlProfileName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Profile,
      _Language
}
where
  txt.plnaw = '*';
```
