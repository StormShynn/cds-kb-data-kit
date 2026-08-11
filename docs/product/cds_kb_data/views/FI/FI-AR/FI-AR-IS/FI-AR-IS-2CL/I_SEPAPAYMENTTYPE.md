---
name: I_SEPAPAYMENTTYPE
description: "This CDS view provides the data to answer the following business questions: What is the SEPA Mandate payment type? How many SEPA Mandate payment types does the SEPA Mandate have? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAPAYMENTTYPE')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is the SEPA Mandate payment type? How many SEPA Mandate payment types does the SEPA Mandate have? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "SEPA Payment Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "sepa"
  - "payment"
  - "type"
tags:
  - FI
  - bo:companycode
  - component:FI-AR-IS-2CL
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
  - payment
---
# I_SEPAPAYMENTTYPE

**This CDS view provides the data to answer the following business questions: What is the SEPA Mandate payment type? How many SEPA Mandate payment types does the SEPA Mandate have? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAPAYMENTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SEPAPaymentType` | ✓ | |  | `cast(domvalue_l as sepa_pay_type)` | `CHAR(1)` | Mandate: Payment Type |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAPAYMENTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAPAYMENTTYPE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISEPAPAYTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'SEPA Payment Type'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #S, dataClass: #META}
@ObjectModel.representativeKey: 'SEPAPaymentType'
@VDM.viewType: #BASIC
@Analytics.internalName:#LOCAL 
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
      enabled: true
   }
}
@ObjectModel.sapObjectNodeType.name: 'SEPAPaymentType'
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define root view I_SEPAPaymentType 
  as select from dd07l 
  composition [0..*] of I_SEPAPaymentTypeText as _Text 
{
       @ObjectModel.text.association: '_Text'
   key cast(domvalue_l as sepa_pay_type) as SEPAPaymentType,
   
       _Text
}
where dd07l.domname     = 'SEPA_PAY_TYPE' 
  and dd07l.as4local    = 'A'
```
