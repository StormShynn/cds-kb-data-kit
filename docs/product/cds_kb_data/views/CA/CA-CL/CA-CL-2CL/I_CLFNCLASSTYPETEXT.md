---
name: I_CLFNCLASSTYPETEXT
description: "Clfnclasstypetext"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - text-view
  - text
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCLASSTYPETEXT

**Clfnclasstypetext**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassType` | ✓ | |  | `klart` | `CHAR(3)` | Class Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ClassTypeName` |  | |  | `artxt` | `CHAR(40)` | Text describing class type |
| `_Language` | | ✓ | | | | |
| `_ClassTypeBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCLSC1'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Class Type of Classification - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ClassType'
@ObjectModel.semanticKey: [ 'ClassType' ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #SQL_DATA_SOURCE                  ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_ClfnClassTypeText
  as select from tclat as ClassTypeText
    
    association to parent I_ClfnClassTypeBasic as _ClassTypeBasic
      on $projection.ClassType = _ClassTypeBasic.ClassType
    association [0..1] to I_Language as _Language  
      on $projection.Language = _Language.Language      
{
      @ObjectModel.foreignKey.association: '_ClassTypeBasic'
      @ObjectModel.text.element: ['ClassTypeName']
  key ClassTypeText.klart     as ClassType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ClassTypeText.spras     as Language,
      @Semantics.text: true
      ClassTypeText.artxt     as ClassTypeName,
      
      _ClassTypeBasic,
      _Language
};
```
