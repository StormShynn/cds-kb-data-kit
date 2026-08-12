---
name: I_EWM_OUTBOUNDDELIVORDERTYPE_2
description: "Ewm Outbounddelivordertype 2"
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-DLP
  - interface-view
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_OUTBOUNDDELIVORDERTYPE_2

**Ewm Outbounddelivordertype 2**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMDeliveryDocumentCategory` | ✓ | |  |  |  |  |
| `EWMDeliveryDocumentType` | ✓ | |  |  |  |  |
| `_DeliveryCategory` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.viewType:#COMPOSITE

@Analytics:{ dataCategory: #DIMENSION }
@Analytics.internalName:#LOCAL

@ObjectModel.representativeKey: 'EWMDeliveryDocumentType'
@Analytics.technicalName: 'IEWMOUTBDLVTYPE2'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #S}

@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE ]

@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Warehouse Outbound Delivery Order Type'
define view entity I_EWM_OutBoundDelivOrderType_2
  as select from I_EWM_DeliveryType_2
{
      @ObjectModel.foreignKey.association: '_DeliveryCategory'
  key EWMDeliveryDocumentCategory as EWMDeliveryDocumentCategory,
      @ObjectModel.text.association: '_Text'
  key EWMDeliveryDocumentType,
      _DeliveryCategory,
      _Text
}
where
  EWMDeliveryDocumentCategory = 'PDO'
```
