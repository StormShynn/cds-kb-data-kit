---
name: I_SALESINQUIRYTYPE
description: "Salesinquirytype"
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
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESINQUIRYTYPE

**Salesinquirytype**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesInquiryType` | ✓ | |  | `SalesDocumentType` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SalesInquiryType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Sales Inquiry Types'
@Analytics: {dataCategory: #DIMENSION,
             dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSINQYTP'
@AbapCatalog.compiler.compareFilter: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION  ]
@ObjectModel.sapObjectNodeType.name:'SalesInquiryType'
                                        
define view I_SalesInquiryType
  as select from I_SalesDocumentType

{
      @ObjectModel.text.association: '_Text'
  key SalesDocumentType as SalesInquiryType,

      //Association
      _Text
}
where SDDocumentCategory = 'A';
```
