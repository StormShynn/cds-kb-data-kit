---
name: I_ENTPROJECTPRIORITYCODE
description: "Entprojectprioritycode"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
