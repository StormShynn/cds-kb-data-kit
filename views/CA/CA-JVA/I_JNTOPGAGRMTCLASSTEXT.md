---
name: I_JNTOPGAGRMTCLASSTEXT
description: "Jntopgagrmtclasstext"
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - text-view
  - text
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JNTOPGAGRMTCLASSTEXT

**Jntopgagrmtclasstext**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `JntOpgAgrmtClass` | ✓ | |  | `aclass` |  |  |
| `JntOpgAgrmtClassText` |  | |  | `actext` |  |  |
| `_Language` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_JntOpgAgrmtClass` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntOpgAgrmtClass` | `I_JntOpgAgrmtClass` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJOACLT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Joint Operating Agreement Class - Text'
@VDM.viewType: #BASIC
@ObjectModel: { 
  usageType.dataClass: #CUSTOMIZING, 
  usageType.sizeCategory: #S,
  usageType.serviceQuality: #A,
  dataCategory: #TEXT,
  representativeKey: 'JntOpgAgrmtClass'
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
define view I_JntOpgAgrmtClassText
  as select from t8j9g
  association [0..1] to I_Language         as _Language         on  $projection.Language = _Language.Language
  association [1..1] to I_CompanyCode      as _CompanyCode      on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_JntOpgAgrmtClass as _JntOpgAgrmtClass on  $projection.CompanyCode      = _JntOpgAgrmtClass.CompanyCode
                                                                and $projection.JntOpgAgrmtClass = _JntOpgAgrmtClass.JntOpgAgrmtClass
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs              as CompanyCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key spras              as Language,
      @ObjectModel.foreignKey.association: '_JntOpgAgrmtClass'
  key aclass             as JntOpgAgrmtClass,
      @Semantics.text: true
      actext             as JntOpgAgrmtClassText,
      
      _CompanyCode,
      _Language,
      _JntOpgAgrmtClass
}
```
