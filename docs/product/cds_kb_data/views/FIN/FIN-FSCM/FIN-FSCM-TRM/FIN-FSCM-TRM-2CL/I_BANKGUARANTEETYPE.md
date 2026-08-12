---
name: I_BANKGUARANTEETYPE
description: "This CDS view provides a four-digit code for the bank guarantee type. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGUARANTEETYPE')/$value
semantic_en: "This CDS view provides a four-digit code for the bank guarantee type. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Guarantee Type — CDS view giao diện dựa trên tlct_bg_type."
keywords:
  - "bank"
  - "guarantee"
  - "type"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_BANKGUARANTEETYPE

**This CDS view provides a four-digit code for the bank guarantee type. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGUARANTEETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankGuaranteeType` | ✓ | |  | `bg_type` | `CHAR(4)` | Bank Guarantee Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BankGuaranteeTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGUARANTEETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGUARANTEETYPE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBNKGUATYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bank Guarantee Type'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
    usageType : {
        sizeCategory: #S,
        serviceQuality: #X,
        dataClass: #CUSTOMIZING
    },
    resultSet.sizeCategory: #XS,
    representativeKey:'BankGuaranteeType' 
}
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@Analytics : {dataCategory: #DIMENSION}
@Analytics.internalName:#LOCAL
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Metadata.ignorePropagatedAnnotations: true
define view I_BankGuaranteeType 
  as select from tlct_bg_type as BankGuaranteeType 
  association [0..*] to I_BankGuaranteeTypeText as _Text on $projection.BankGuaranteeType = _Text.BankGuaranteeType
{
      @ObjectModel.text.association: '_Text'
  key bg_type     as BankGuaranteeType,
  
      _Text  
}
```
