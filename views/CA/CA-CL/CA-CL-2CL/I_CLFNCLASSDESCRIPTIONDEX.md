---
name: I_CLFNCLASSDESCRIPTIONDEX
description: Clfnclassdescriptiondex
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
  - data-extraction
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCLASSDESCRIPTIONDEX

**Clfnclassdescriptiondex**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ClassInternalID` | `ClassDescription.clint` |
| key `Language` | `ClassDescription.spras` |
| key `ClassKeywordPositionNumber` | `ClassDescription.klpos` |
| `ClassDescription` | `ClassDescription.kschl` |
| `_Language` | *Association* |
| `_Class` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Class` | `I_ClfnClassDEX` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@EndUserText.label: 'Description of Classification Class DEX'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ClassKeywordPositionNumber'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #SQL_DATA_SOURCE                  ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC  
define view entity I_ClfnClassDescriptionDEX
  as select from swor as ClassDescription
  
      association [0..1] to I_Language as _Language 
        on $projection.Language = _Language.Language
        
      association [1..1] to I_ClfnClassDEX as _Class
        on $projection.ClassInternalID = _Class.ClassInternalID         
        
{ 
      @ObjectModel.foreignKey.association: '_Class'
  key ClassDescription.clint as ClassInternalID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ClassDescription.spras as Language,
  key ClassDescription.klpos as ClassKeywordPositionNumber,
      @Semantics.text: true      
      ClassDescription.kschl as ClassDescription,

      _Language,
      _Class
}where ClassDescription.klpos = '01'
```
