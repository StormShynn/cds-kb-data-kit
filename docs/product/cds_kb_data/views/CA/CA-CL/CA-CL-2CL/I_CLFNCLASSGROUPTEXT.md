---
name: I_CLFNCLASSGROUPTEXT
description: "Clfnclassgrouptext"
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
# I_CLFNCLASSGROUPTEXT

**Clfnclassgrouptext**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassGroup` | ✓ | |  | `klagr` | `CHAR(10)` | Class Group |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ClassGroupName` |  | |  | `ktext` | `CHAR(40)` | Class Group Description |
| `_Language` | | ✓ | | | | |
| `_ClassGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCLC8'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Group of Classification Class - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ClassGroup'
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
define view I_ClfnClassGroupText 
  as select from tclgt as ClassGroupText
  
      association to parent I_ClfnClassGroup as _ClassGroup
        on $projection.ClassGroup = _ClassGroup.ClassGroup
      association [0..1] to I_Language as _Language  
        on $projection.Language = _Language.Language      
{ 
      @ObjectModel.foreignKey.association: '_ClassGroup'
      @ObjectModel.text.element: ['ClassGroupName']
  key ClassGroupText.klagr       as ClassGroup, 
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ClassGroupText.spras       as Language,
      @Semantics.text: true 
      ClassGroupText.ktext       as ClassGroupName,
 
      _ClassGroup,
      _Language
}
```
