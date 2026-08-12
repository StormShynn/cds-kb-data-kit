---
name: I_SEPAPAYMENTTYPETEXT
description: "This CDS view provides the data to answer the following business questions: What is the SEPA Mandate payment type? How many SEPA Mandate payment types does the SEPA Mandate have? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAPAYMENTTYPETEXT')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is the SEPA Mandate payment type? How many SEPA Mandate payment types does the SEPA Mandate have? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "SEPA Payment Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "sepa"
  - "payment"
  - "type"
  - "text"
  - "language"
  - "name"
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
# I_SEPAPAYMENTTYPETEXT

**This CDS view provides the data to answer the following business questions: What is the SEPA Mandate payment type? How many SEPA Mandate payment types does the SEPA Mandate have? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAPAYMENTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SEPAPaymentType` | ✓ | |  | `cast(domvalue_l as sepa_pay_type)` | `CHAR(1)` | Mandate: Payment Type |
| `SEPAPaymentTypeName` |  | |  | `cast(ddtext as fsepa_payment_type_name preserving type )` | `CHAR(60)` | SEPA Mandate Payment Type Name |
| `_Language` | | ✓ | | | | |
| `_SEPAPaymentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAPAYMENTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAPAYMENTTYPETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISEPAPAYTYTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'SEPA Payment Type - Text'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SEPAPaymentType'
@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #S, dataClass: #META}
@Analytics:{
    dataExtraction: {
       enabled: true
    }
}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@VDM.viewType: #BASIC
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_SEPAPaymentTypeText 
  as select from dd07t 
  association to parent I_SEPAPaymentType as _SEPAPaymentType on $projection.SEPAPaymentType = _SEPAPaymentType.SEPAPaymentType
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
{
        @Semantics.language: true
        @ObjectModel.foreignKey.association: '_Language'
    key dd07t.ddlanguage as Language,
        
        @ObjectModel.foreignKey.association: '_SEPAPaymentType'
    key cast(domvalue_l as sepa_pay_type) as SEPAPaymentType,
    
        @Semantics.text: true
       cast(ddtext as fsepa_payment_type_name preserving type ) as SEPAPaymentTypeName,       
    
        _Language,
        _SEPAPaymentType        
}
where dd07t.domname  = 'SEPA_PAY_TYPE' 
  and dd07t.as4local = 'A'
```
