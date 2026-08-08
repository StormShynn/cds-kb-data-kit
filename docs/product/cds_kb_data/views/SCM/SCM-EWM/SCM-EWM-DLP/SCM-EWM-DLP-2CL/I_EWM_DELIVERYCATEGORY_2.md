---
name: I_EWM_DELIVERYCATEGORY_2
description: "Ewm Deliverycategory 2"
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-DLP
  - interface-view
  - delivery
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_DELIVERYCATEGORY_2

**Ewm Deliverycategory 2**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMDeliveryDocumentCategory` | ✓ | |  | `category` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Delivery Category'

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'EWMDeliveryDocumentCategory'
@Analytics.technicalName: 'IEWMDLVCATE2'
@Analytics:{ dataCategory: #DIMENSION  }
@Analytics.internalName:#LOCAL 
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}

@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE ]

@Metadata.ignorePropagatedAnnotations:true
define view entity I_EWM_DeliveryCategory_2
  as select from /scdl/tcategory
{
  key category as EWMDeliveryDocumentCategory
}
```
