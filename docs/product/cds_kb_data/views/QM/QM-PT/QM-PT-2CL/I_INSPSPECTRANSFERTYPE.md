---
name: I_INSPSPECTRANSFERTYPE
description: "Inspspectransfertype"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPSPECTRANSFERTYPE

**Inspspectransfertype**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspSpecTransferType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as vdm_qvollst preserving type )` |  |  |
| `_InspSpecTransferTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspSpecTransferTypeText` | `I_InspSpecTransferTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Transfer Type of Master Characteristic'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IINSPTRFRTYP'
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        sizeCategory: #S,
        serviceQuality: #C // as function substring is used but #A and #B must not contain functions
    },
    representativeKey: 'InspSpecTransferType',
    resultSet.sizeCategory: #XS
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspSpecTransferType as select from dd07l

   association [0..*] to I_InspSpecTransferTypeText as _InspSpecTransferTypeText 
      on $projection.InspSpecTransferType = _InspSpecTransferTypeText.InspSpecTransferType
       
{
    @ObjectModel.text.association: '_InspSpecTransferTypeText'
    key cast ( substring( domvalue_l, 1, 1 ) as vdm_qvollst preserving type ) as InspSpecTransferType

    /* Associations */
    ,_InspSpecTransferTypeText

}
where domname  = 'QVOLLST' 
  and as4local = 'A'
```
