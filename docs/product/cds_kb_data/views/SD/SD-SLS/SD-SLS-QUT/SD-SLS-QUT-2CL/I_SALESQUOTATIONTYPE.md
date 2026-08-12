---
name: I_SALESQUOTATIONTYPE
description: "Salesquotationtype"
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - interface-view
  - sales-quotation
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESQUOTATIONTYPE

**Salesquotationtype**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesQuotationType` | ✓ | |  | `cast( SalesDocumentType as sales_quotation_type preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SalesQuotationType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Sales Quotation Types'
@Analytics: {dataCategory: #DIMENSION,
             dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSQTANTP'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
// @AbapCatalog.buffering.status: #ACTIVE
// @AbapCatalog.buffering.type: #FULL
@ObjectModel.sapObjectNodeType.name:'SalesQuotationType'

define view I_SalesQuotationType 
as select from I_SalesDocumentType

{   
    //key
    @ObjectModel.text.association: '_Text'
    key cast( SalesDocumentType as sales_quotation_type preserving type ) as SalesQuotationType,
    
    //association 
    _Text
}
where SDDocumentCategory = 'B';
```
