---
name: I_CLFNCLASSTYPEBASIC
description: Clfnclasstypebasic
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
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCLASSTYPEBASIC

**Clfnclasstypebasic**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ClassType` | ✓ | |  | `klart` |
| `ClfnObjectTable` |  | |  | `obtab` |
| `MultipleObjTableClfnIsAllowed` |  | |  | `multobj` |
| `ClfnNewNumberingIsAllowed` |  | |  | `ausp_new` |
| `ClassTypeIsInternal` |  | |  | `intklart` |
| `EngChangeMgmtIsAllowed` |  | |  | `aediezuord` |
| `MultipleClassIsAllowed` |  | |  | `mfkls` |
| `ClassTypeIsUsableInVarConfign` |  | |  | `varklart` |
| `_ClassTypeText` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCLSC3'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Class Type Basic of Classification'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'ClassType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name: 'ClassificationClassType' 
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #ANALYTICAL_DIMENSION,
     #SQL_DATA_SOURCE                  ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view I_ClfnClassTypeBasic
  as select from tcla as Basic
  
      composition [0..*] of I_ClfnClassTypeText as _ClassTypeText 
{     
      @ObjectModel.text.association: '_ClassTypeText'
  key Basic.klart      as ClassType,
      Basic.obtab      as ClfnObjectTable,
      Basic.multobj    as MultipleObjTableClfnIsAllowed,
      Basic.ausp_new   as ClfnNewNumberingIsAllowed,
      Basic.intklart   as ClassTypeIsInternal,
//      Basic.tracl      as,
      Basic.aediezuord as EngChangeMgmtIsAllowed,   
//      Basic.aeblgzuord as,
      Basic.mfkls      as MultipleClassIsAllowed,
      Basic.varklart   as ClassTypeIsUsableInVarConfign,
      
      _ClassTypeText
}
```
