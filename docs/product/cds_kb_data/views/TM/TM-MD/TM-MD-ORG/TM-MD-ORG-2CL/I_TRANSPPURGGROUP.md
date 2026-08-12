---
name: I_TRANSPPURGGROUP
description: "Transppurggroup"
app_component: TM-MD-ORG-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-ORG
  - interface-view
  - component:TM-MD-ORG-2CL
  - lob:Other
---
# I_TRANSPPURGGROUP

**Transppurggroup**

| Property | Value |
|---|---|
| App Component | `TM-MD-ORG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspPurgGroup` | ✓ | |  | `cast( PurchasingGroup as /scmtms/purch_grp preserving type )` |  |  |
| `TranspPurgGroupName` |  | |  | `cast( PurchasingGroupName as /scmtms/purch_grp_name preserving type )` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Purchasing Group'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_TranspPurgGroup
  as select from I_PurchasingGroup
{
  key cast( PurchasingGroup as /scmtms/purch_grp preserving type )          as TranspPurgGroup,
      cast( PurchasingGroupName as /scmtms/purch_grp_name preserving type ) as TranspPurgGroupName
}
```
