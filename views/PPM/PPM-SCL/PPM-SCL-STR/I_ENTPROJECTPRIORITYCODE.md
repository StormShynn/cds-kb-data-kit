---
name: I_ENTPROJECTPRIORITYCODE
description: "Entprojectprioritycode"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - project
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_ENTPROJECTPRIORITYCODE

**Entprojectprioritycode**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PriorityCode` | ✓ | |  | `cast(lpad(cast(priority as abap.char(3)),3,'0')as abap.numc(3))` |  |  |
| `_PriorityCodeText` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Priority for Enterprise Projects'

@AbapCatalog: { 
       sqlViewName: 'IENPRPRIORCODE',
       compiler.compareFilter: true,
       preserveKey: true
}     

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
     representativeKey: 'PriorityCode',
     sapObjectNodeType.name: 'EnterpriseProjectPriority',
//   dataCategory: #VALUE_HELP,
     resultSet.sizeCategory: #XS,
     supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ] ,   
     usageType: {
        serviceQuality:  #A,
        dataClass:       #CUSTOMIZING,
        sizeCategory:    #S
    }
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define root view I_EntProjectPriorityCode
  as select from dpr_priority
  composition [0..*] of I_EntProjectPriorityCodeText as _PriorityCodeText
{
        
        @ObjectModel.text.association: '_PriorityCodeText'
    key cast(lpad(cast(priority as abap.char(3)),3,'0')as abap.numc(3)) as PriorityCode,
        _PriorityCodeText
}
```
