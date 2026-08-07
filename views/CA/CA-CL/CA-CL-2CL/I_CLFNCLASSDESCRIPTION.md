---
name: I_CLFNCLASSDESCRIPTION
description: Clfnclassdescription
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
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCLASSDESCRIPTION

**Clfnclassdescription**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ClassInternalID` | ✓ | |  | `clint` |
| `Language` | ✓ | |  | `spras` |
| `ClassDescription` |  | |  | `cast( ClassDescription.kschl as klsbez preserving type )` |
| `ClassKeywordPositionNumber` |  | |  | `klpos` |
| `_Language` | | ✓ | | |
| `_Class` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Class` | `I_ClfnClass` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCLS3'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #MANDATORY 
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Description of Classification Class'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ClassInternalID'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC  
define view I_ClfnClassDescription
  as select from swor as ClassDescription
  
      association [0..1] to I_Language as _Language 
        on $projection.Language = _Language.Language
        
      association [1..1] to I_ClfnClass as _Class
        on $projection.ClassInternalID = _Class.ClassInternalID         
                
{ 
      @ObjectModel.foreignKey.association: '_Class'
  key ClassDescription.clint as ClassInternalID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ClassDescription.spras as Language,      
      @Semantics.text: true      
      cast( ClassDescription.kschl as klsbez preserving type ) as ClassDescription,
      ClassDescription.klpos as ClassKeywordPositionNumber,
      
      _Language,
      _Class
}
where ClassDescription.klpos = '01'
```
