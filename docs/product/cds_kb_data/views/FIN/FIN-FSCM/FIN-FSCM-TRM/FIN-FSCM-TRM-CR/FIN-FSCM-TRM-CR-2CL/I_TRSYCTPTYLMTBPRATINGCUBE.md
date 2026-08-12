---
name: I_TRSYCTPTYLMTBPRATINGCUBE
description: "This CDS view provides the prerequisites for answering the following business questions for the business partner rating: How is the business partner rated by rating agencies? What are the expectations for the development of the business partner rating in the future? What is the validity period of the available rating information? What is the creation date of the rating information?"
app_component: FIN-FSCM-TRM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYCTPTYLMTBPRATINGCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions for the business partner rating: How is the business partner rated by rating agencies? What are the expectations for the development of the business partner rating in the future? What is the validity period of the available rating information? What is the creation date of the rating information?"
semantic_vi: "Treasury Counterparty Limit Business Partner Rating - Cube — CDS view giao diện dựa trên I_TrsyCtptyLmtBusinessPartner."
keywords:
  - "treasury"
  - "counterparty"
  - "limit"
  - "business"
  - "partner"
  - "rating"
  - "cube"
  - "procedure"
  - "validity"
  - "date"
  - "start"
  - "grade"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-TRM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-CR
  - FIN-FSCM-TRM-CR-2CL
  - interface-view
  - lob:finance
---
# I_TRSYCTPTYLMTBPRATINGCUBE

**This CDS view provides the prerequisites for answering the following business questions for the business partner rating: How is the business partner rated by rating agencies? What are the expectations for the development of the business partner rating in the future? What is the validity period of the available rating information? What is the creation date of the rating information?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYCTPTYLMTBPRATINGCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerRatingProcedure` | ✓ | |  |  | `CHAR(10)` | Rating Procedure |
| `BPRatingValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid-to Date for Rating |
| `BPRatingValidityStartDate` |  | |  |  | `DATS(8)` | Valid-from Date for Rating |
| `BusinessPartnerRatingGrade` |  | |  |  | `CHAR(10)` | Rating |
| `BusinessPartnerRatingTrend` |  | |  |  | `CHAR(2)` | Trend |
| `BPRatingCreationDate` |  | |  |  | `DATS(8)` | Entered-on Date for Rating |
| `BusinessPartnerRatingComment` |  | |  |  | `CHAR(60)` | Text for Ratings |
| `BusinessPartnerRatingIsAllowed` |  | |  |  | `CHAR(1)` | Rating Allowed |
| `BPRatingIsValidOnKeyDate` |  | |  |  | `CHAR(1)` | Business Partner Rating is valid on Key Date |
| `BusinessPartnerRatingIsExpired` |  | |  |  | `CHAR(1)` | Rating Validity is Expired according to Permitted Period |
| `NumberOfRecords` |  | |  | `cast( 1 as ftr_cra_number_of_records )` | `INT4(10)` | Number of Records |
| `_ValidityEndDate` | | ✓ | | | | |
| `_BPRatingProcedure` | | ✓ | | | | |
| `_BPRatingProcedureGrade` | | ✓ | | | | |
| `_BPRatingTrend` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BPFinancialServicesExtn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ValidityEndDate` | `I_CalendarDate` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYCTPTYLMTBPRATINGCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYCTPTYLMTBPRATINGCUBE')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'ITCLBPRATINGC',
                compiler.compareFilter: true,
                preserveKey: true,
                buffering.status: #SWITCHED_OFF }

@AccessControl: { authorizationCheck: #CHECK,
                  personalData.blocking: #NOT_REQUIRED }

@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL }

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata: { allowExtensions:true,
             ignorePropagatedAnnotations:true }

@ObjectModel: { representativeKey: 'BusinessPartner',
                usageType.dataClass: #MIXED,
                usageType.serviceQuality: #D,
                usageType.sizeCategory: #XXL,
                supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE  ],
                modelingPattern: #ANALYTICAL_CUBE  }

@VDM.viewType: #COMPOSITE

@EndUserText.label: 'Treasury Counterparty Limit Business Partner Rating - Cube'
define view I_TrsyCtptyLmtBPRatingCube
  as select from I_TrsyCtptyLmtBusinessPartner as BP
    inner join   I_BusinessPartnerRating       as Rating on Rating.BusinessPartner = BP.BusinessPartner
  -- AE requires foreign key association for every non-representative key field. 
  association [1..1] to I_CalendarDate as _ValidityEndDate on $projection.BPRatingValidityEndDate = _ValidityEndDate.CalendarDate
{
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key Rating.BusinessPartner,
      @ObjectModel.foreignKey.association: '_BPRatingProcedure'
  key Rating.BusinessPartnerRatingProcedure,
      @ObjectModel.foreignKey.association: '_ValidityEndDate'
  key Rating.BPRatingValidityEndDate,
      Rating.BPRatingValidityStartDate,
      Rating.BusinessPartnerRatingGrade,
      Rating.BusinessPartnerRatingTrend,
      Rating.BPRatingCreationDate,
      Rating.BusinessPartnerRatingComment,
      Rating.BusinessPartnerRatingIsAllowed,
      Rating.BPRatingIsValidOnKeyDate,
      Rating.BusinessPartnerRatingIsExpired,
      @DefaultAggregation: #SUM
      cast( 1 as ftr_cra_number_of_records ) as NumberOfRecords,
      _BPRatingProcedure, 
      _BPRatingProcedureGrade,
      _BPRatingTrend,
      _BusinessPartner,
      _BPFinancialServicesExtn,
      _ValidityEndDate
}
```
