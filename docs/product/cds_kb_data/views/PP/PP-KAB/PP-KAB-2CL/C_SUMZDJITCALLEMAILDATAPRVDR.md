---
name: C_SUMZDJITCALLEMAILDATAPRVDR
description: "This CDS view forms the basis for the predelivered Output Management email template for summarized JIT calls (PP_SUM_JIT_CALL_EMAIL). This CDS view provides the fields that can be used in the template for the email message body, specifically focusing on the output partner and plant information. This CDS view provides the data to answer the following business questions: Which fields are included in the email template for Output Management for Summarized JIT Calls? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PP-KAB-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUMZDJITCALLEMAILDATAPRVDR')/$value
semantic_en: "This CDS view forms the basis for the predelivered Output Management email template for summarized JIT calls (PP_SUM_JIT_CALL_EMAIL). This CDS view provides the fields that can be used in the template for the email message body, specifically focusing on the output partner and plant information. This CDS view provides the data to answer the following business questions: Which fields are included in the email template for Output Management for Summarized JIT Calls? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Summarized JIT Call Email Data Provider — CDS view tiêu dùng dựa trên I_SummarizedJITCall."
keywords:
  - "summarized"
  - "jit"
  - "call"
  - "email"
  - "data"
  - "provider"
  - "number"
  - "supplier"
  - "output"
  - "partner"
  - "sumzd"
  - "profile"
  - "plant"
tags:
  - PP
  - bo:companycode
  - component:PP-KAB-2CL
  - consumption-view
  - lob:manufacturing
  - plan
  - PP-KAB
  - PP-KAB-2CL
---
# C_SUMZDJITCALLEMAILDATAPRVDR

**This CDS view forms the basis for the predelivered Output Management email template for summarized JIT calls (PP_SUM_JIT_CALL_EMAIL). This CDS view provides the fields that can be used in the template for the email message body, specifically focusing on the output partner and plant information. This CDS view provides the data to answer the following business questions: Which fields are included in the email template for Output Management for Summarized JIT Calls? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PP-KAB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUMZDJITCALLEMAILDATAPRVDR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITCallNumber` | ✓ | |  |  | `CHAR(10)` | JIT Call Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `OutputPartnerForSumzdJITCall` |  | |  | `cast(OutputPartnerForSumzdJITCall as vdm_pabnpl preserving type)` | `CHAR(10)` | Output Partner |
| `JITCallProfile` |  | |  |  | `CHAR(4)` | JIT Call Profile |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantName` |  | | `_Plant` | `PlantName` | `CHAR(30)` | Plant Name |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |
| `_OutputPartner` | | ✓ | | | | |
| `_OutputPartnerCompanyByPlant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUMZDJITCALLEMAILDATAPRVDR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUMZDJITCALLEMAILDATAPRVDR')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CSUMJITCALLEMAIL'
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType : #CONSUMPTION
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ]
@ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Summarized JIT Call Email Data Provider'
define view C_SumzdJITCallEmailDataPrvdr 
  as select from I_SummarizedJITCall
  association [1..1] to I_Plant as _Plant on $projection.Plant = _Plant.Plant
{
  key JITCallNumber,
      Supplier,
      cast(OutputPartnerForSumzdJITCall as vdm_pabnpl preserving type) as OutputPartnerForSumzdJITCall,
      JITCallProfile,
      Plant,
      _Plant.PlantName,
 
      // Only for DCL
      @Consumption.hidden: true
      _Supplier,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,
      @Consumption.hidden: true
      _OutputPartner,
      @Consumption.hidden: true
      _OutputPartnerCompanyByPlant
}
```
