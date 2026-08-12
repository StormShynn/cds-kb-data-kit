---
name: C_LEGALTRANSLINKEDOBJQUERY
description: "This CDS view provides the data to answer the following business questions: What is the percentage of legal transactions with linked object? What is the number of legal transactions with linked object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSLINKEDOBJQUERY')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is the percentage of legal transactions with linked object? What is the number of legal transactions with linked object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Linked Object - Query — CDS view tiêu dùng dựa trên C_LegalTransLinkedObjCube."
keywords:
  - "linked"
  - "object"
  - "query"
  - "legal"
  - "transaction"
  - "linkd"
  - "cntnt"
  - "type"
  - "name"
tags:
  - CM
  - bo:companycode
  - CM-GF
  - CM-GF-2CL
  - component:CM-GF-2CL
  - consumption-view
  - transaction
---
# C_LEGALTRANSLINKEDOBJQUERY

**This CDS view provides the data to answer the following business questions: What is the percentage of legal transactions with linked object? What is the number of legal transactions with linked object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSLINKEDOBJQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalTransactionUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LegalTransactionLinkdObjUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMLinkdObjType` |  | |  |  | `CHAR(4)` | Linked Object Type |
| `LglCntntMLinkdObjTypeName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMLinkdObj` |  | |  |  | `CHAR(255)` | Linked Object ID |
| `LglTransTriggerObjNameText` |  | |  |  | `CHAR(1)` | Text for Legal Transaction with Triggering Object |
| `LegalTransactionHealthName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMEntity` |  | |  |  | `CHAR(10)` | Entity ID |
| `LglCntntMEntityTypeName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMGovLawText` |  | |  |  | `CHAR(92)` | Governing Law Text |
| `LglCntntMMainOrgName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `LglCntntMMainOrgTypeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `TotalNumberOfLegalTransactions` |  | |  |  | `INT4(10)` | Total Numbers of Legal Transaction |
| `TotNrOfLegalTransWithLinkedObj` |  | |  |  | `INT4(10)` |  |
| `LegalTransWithTrggrObjPercent` |  | |  | `cast( 100 as lcm_tot_lt_renewed_per )` | `DEC(5)` | % of Renewed Contracts |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSLINKEDOBJQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALTRANSLINKEDOBJQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CLGLTRLINKOBJQRY'
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Linked Object - Query'
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY

define view C_LegalTransLinkedObjQuery
  as select from C_LegalTransLinkedObjCube
{
  key LegalTransactionUUID,
  key LegalTransactionLinkdObjUUID,
      @EndUserText.label: 'Linked Object Type ID'
      LglCntntMLinkdObjType,

      @EndUserText.label: 'Linked Object Type'
      LglCntntMLinkdObjTypeName,

      @Semantics.text: true
      @AnalyticsDetails.query.display: #KEY_TEXT
      LglCntntMLinkdObj,

      @EndUserText.label: 'Origin'
      LglTransTriggerObjNameText,

      @EndUserText.label: 'Status of Legal Transaction'
      LegalTransactionHealthName,

      @EndUserText.label: 'Main Entity'
      LglCntntMEntity,

      @EndUserText.label: 'Main Entity Type'
      LglCntntMEntityTypeName,

      @EndUserText.label: 'Governing Law'
      LglCntntMGovLawText,

      @EndUserText.label: 'Main Orgn. Name'
      LglCntntMMainOrgName,

      @EndUserText.label: 'Main Orgn. Type Name'
      LglCntntMMainOrgTypeName,

      @EndUserText.label: 'Total No. of Legal Transactions'
      @DefaultAggregation:#SUM
      TotalNumberOfLegalTransactions,

      @EndUserText.label: 'No. of Legal Transactions with Linked Object'
      @DefaultAggregation:#SUM
      TotNrOfLegalTransWithLinkedObj,

      @EndUserText.label: '% Legal Transactions with Linked Object'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula: 'NDIV0(  TotNrOfLegalTransWithLinkedObj / TotalNumberOfLegalTransactions ) * 100'
      cast( 100 as lcm_tot_lt_renewed_per ) as LegalTransWithTrggrObjPercent
}
```
