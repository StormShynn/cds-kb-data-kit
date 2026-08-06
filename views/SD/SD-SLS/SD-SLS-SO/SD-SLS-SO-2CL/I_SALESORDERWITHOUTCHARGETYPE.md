---
name: I_SALESORDERWITHOUTCHARGETYPE
description: Sales OrderWITHOUTCHARGETYPE
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - sales-order
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERWITHOUTCHARGETYPE

**Sales OrderWITHOUTCHARGETYPE**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrderWithoutChargeType` | `cast ( SalesDocumentType as sales_order_wthout_charge_type preserving type )` |
| `SalesOrderWthoutChrgProcgType` | `SalesDocumentProcessingType` |
| `_Text` | *Association* |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel: {
    representativeKey: 'SalesOrderWithoutChargeType',
    sapObjectNodeType.name: 'SalesOrderWithoutChargeType',
    usageType: {
        dataClass:#CUSTOMIZING,
        serviceQuality:#A,
        sizeCategory: #S
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@EndUserText.label: 'Sales Order Without Charge Types'
@Analytics: {dataCategory: #DIMENSION,
             dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSOWTHOCHRGTP'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesOrderWithoutChargeType 
as select from I_SalesDocumentType

{   
    @ObjectModel.text.association: '_Text'
    key cast ( SalesDocumentType as sales_order_wthout_charge_type preserving type ) as   SalesOrderWithoutChargeType,
        SalesDocumentProcessingType                                                  as   SalesOrderWthoutChrgProcgType,
    
    //association 
    _Text
}
where SDDocumentCategory = 'I';
```
