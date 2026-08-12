---
name: C_TRSYCTPTYLMTBPRATINGQRY
description: "This CDS view provides the prerequisites for answering the following business questions for the business partner rating: How is the business partner rated by rating agencies at a specific date? What are the expectations for the development of the business partner rating in the future?"
app_component: FIN-FSCM-TRM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYCTPTYLMTBPRATINGQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions for the business partner rating: How is the business partner rated by rating agencies at a specific date? What are the expectations for the development of the business partner rating in the future?"
semantic_vi: "Treasury Counterparty Limit Business Partner Rating Query — CDS view tiêu dùng dựa trên I_TrsyCtptyLmtBPRatingCube."
keywords:
  - "treasury"
  - "counterparty"
  - "limit"
  - "business"
  - "partner"
  - "rating"
  - "query"
  - "procedure"
  - "grade"
  - "trend"
  - "number"
  - "records"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-TRM-CR-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-CR
  - FIN-FSCM-TRM-CR-2CL
  - lob:finance
---
# C_TRSYCTPTYLMTBPRATINGQRY

**This CDS view provides the prerequisites for answering the following business questions for the business partner rating: How is the business partner rated by rating agencies at a specific date? What are the expectations for the development of the business partner rating in the future?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYCTPTYLMTBPRATINGQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerRatingProcedure` | ✓ | |  |  | `CHAR(10)` | Rating Procedure |
| `BusinessPartnerRatingGrade` |  | |  |  | `CHAR(10)` | Rating |
| `BusinessPartnerRatingTrend` |  | |  |  | `CHAR(2)` | Trend |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Records |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYCTPTYLMTBPRATINGQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYCTPTYLMTBPRATINGQRY')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'CTCLBPRATINGQ',
                compiler.compareFilter: true,
                preserveKey: true,
                buffering.status: #NOT_ALLOWED }

@AccessControl: { authorizationCheck: #PRIVILEGED_ONLY,
                  personalData.blocking: #NOT_REQUIRED }

@Analytics: { query: true,
              internalName: #LOCAL }

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata: { allowExtensions:true,
             ignorePropagatedAnnotations:true }

@ObjectModel: { usageType.dataClass: #MIXED,
                usageType.serviceQuality: #D,
                usageType.sizeCategory: #XXL,
                supportedCapabilities: [ #ANALYTICAL_QUERY  ],
                modelingPattern: #ANALYTICAL_QUERY }

@OData.publish: true
@VDM.viewType: #CONSUMPTION

@EndUserText.label: 'Treasury Counterparty Limit Business Partner Rating Query'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view C_TrsyCtptyLmtBPRatingQry
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    --@Semantics.businessDate.at: true
    P_KeyDate : vdm_v_key_date
  as select from I_TrsyCtptyLmtBPRatingCube
{
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #KEY_TEXT
  key BusinessPartner,
      @AnalyticsDetails.query.axis: #ROWS
  key BusinessPartnerRatingProcedure,
      @AnalyticsDetails.query.axis: #ROWS
      BusinessPartnerRatingGrade,
      BusinessPartnerRatingTrend,
      NumberOfRecords
}
where
      BPRatingValidityStartDate <= $parameters.P_KeyDate
  and BPRatingValidityEndDate   >= $parameters.P_KeyDate
```
