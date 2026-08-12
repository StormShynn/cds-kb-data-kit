---
name: I_CLFNCLASSSTATUSTEXT
description: "Clfnclassstatustext"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - text-view
  - text
  - status
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCLASSSTATUSTEXT

**Clfnclassstatustext**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassType` | ✓ | |  | `klart` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ClassStatus` | ✓ | |  | `status` |  |  |
| `ClassStatusName` |  | |  | `stext` |  |  |
| `_Language` | | ✓ | | | | |
| `_ClassType` | | ✓ | | | | |
| `_ClassStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ClassType` | `I_ClfnClassTypeBasic` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCLC4'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Status of Classification Class - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ClassStatus'
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
define view I_ClfnClassStatusText 
  as select from tclut as ClassStatusText 
      
      association to parent I_ClfnClassStatus as _ClassStatus
        on $projection.ClassType   = _ClassStatus.ClassType and
           $projection.ClassStatus = _ClassStatus.ClassStatus        
      association [0..1] to I_Language as _Language  
        on $projection.Language = _Language.Language 
      association [0..1] to I_ClfnClassTypeBasic as _ClassType  
        on $projection.ClassType = _ClassType.ClassType 
{ 
      @ObjectModel.foreignKey.association: '_ClassType'
  key ClassStatusText.klart       as ClassType, 
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ClassStatusText.spras       as Language, 
      @ObjectModel.foreignKey.association: '_ClassStatus'
      @ObjectModel.text.element: ['ClassStatusName']
  key ClassStatusText.status      as ClassStatus,
      @Semantics.text: true 
      ClassStatusText.stext       as ClassStatusName,
        
      _ClassType,
      _ClassStatus,
      _Language
}
```
