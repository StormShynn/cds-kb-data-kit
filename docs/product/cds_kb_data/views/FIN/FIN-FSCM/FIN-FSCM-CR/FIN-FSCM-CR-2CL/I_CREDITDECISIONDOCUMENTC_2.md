---
name: I_CREDITDECISIONDOCUMENTC_2
description: "This CDS view is designed to provide a comprehensive analytical cube for credit decision documents. It aggregates and presents data related to credit decisions, including details about business partners, credit segments, credit risk classes, and associated documents. The view is structured to support analytical queries and reporting, focusing on open credit decision cases. This CDS view provides the data to answer the following business questions: What are the open credit decision documents for a given business partner or credit segment? What is the status, priority, and reason for each credit decision document? Who are the users involved in processing, creating, changing, and closing credit decision documents? What are the credit limits and exposures for business partners within specific credit segments? How many days have passed since the planned close date for credit decision documents, and which documents have exceeded this date? What are the amounts related to open credit, checked credit risk, customer credit limit, and customer credit exposure? Which credit checks have failed for the credit decision documents, such as static limit utilization, maximum document amount, dynamic limit utilization, maximum dunning level, oldest open item, days sales outstanding, and overdue open item checks? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITDECISIONDOCUMENTC_2')/$value
semantic_en: "This CDS view is designed to provide a comprehensive analytical cube for credit decision documents. It aggregates and presents data related to credit decisions, including details about business partners, credit segments, credit risk classes, and associated documents. The view is structured to support analytical queries and reporting, focusing on open credit decision cases. This CDS view provides the data to answer the following business questions: What are the open credit decision documents for a given business partner or credit segment? What is the status, priority, and reason for each credit decision document? Who are the users involved in processing, creating, changing, and closing credit decision documents? What are the credit limits and exposures for business partners within specific credit segments? How many days have passed since the planned close date for credit decision documents, and which documents have exceeded this date? What are the amounts related to open credit, checked credit risk, customer credit limit, and customer credit exposure? Which credit checks have failed for the credit decision documents, such as static limit utilization, maximum document amount, dynamic limit utilization, maximum dunning level, oldest open item, days sales outstanding, and overdue open item checks? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Open Documented Credit Decisions — CDS view tổng hợp dựa trên P_DCD2_2."
keywords:
  - "open"
  - "documented"
  - "credit"
  - "decisions"
  - "decision"
  - "document"
  - "business"
  - "partner"
  - "crdt"
  - "mgmt"
  - "group"
  - "segment"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-CR-2CL
  - customer
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - plan
---
# I_CREDITDECISIONDOCUMENTC_2

**This CDS view is designed to provide a comprehensive analytical cube for credit decision documents. It aggregates and presents data related to credit decisions, including details about business partners, credit segments, credit risk classes, and associated documents. The view is structured to support analytical queries and reporting, focusing on open credit decision cases. This CDS view provides the data to answer the following business questions: What are the open credit decision documents for a given business partner or credit segment? What is the status, priority, and reason for each credit decision document? Who are the users involved in processing, creating, changing, and closing credit decision documents? What are the credit limits and exposures for business partners within specific credit segments? How many days have passed since the planned close date for credit decision documents, and which documents have exceeded this date? What are the amounts related to open credit, checked credit risk, customer credit limit, and customer credit exposure? Which credit checks have failed for the credit decision documents, such as static limit utilization, maximum document amount, dynamic limit utilization, maximum dunning level, oldest open item, days sales outstanding, and overdue open item checks? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITDECISIONDOCUMENTC_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditDecisionDocumentUUID` | ✓ | |  |  | `RAW(16)` | UUID of DCD |
| `CreditDecisionDocument` |  | |  |  | `CHAR(12)` | DCD ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CrdtMgmtBusinessPartnerGroup` |  | | `_CreditManagementBP` | `CrdtMgmtBusinessPartnerGroup` | `NUMC(4)` | Customer Credit Group |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `Country` |  | |  | `cast( _BusinessPartner._CurrentDefaultAddress._StandardAddress.Country as farp_country preserving type)` | `CHAR(3)` | Country/Region |
| `Region` |  | | `_BusinessPartner._CurrentDefaultAddress._StandardAddress` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class at Time of Credit Decision |
| `CrdtDcsnDocumentProcessingUser` |  | |  |  | `CHAR(12)` | Processor |
| `CrdtDcsnDocumentCreatedByUser` |  | |  |  | `CHAR(12)` | DCD Created By (User) |
| `CrdtDcsnDocLastChangedByUser` |  | |  |  | `CHAR(12)` | DCD Changed By (User) |
| `CrdtDcsnDocumentClosedByUser` |  | |  |  | `CHAR(12)` | DCD Closed By (User) |
| `CreditDecisionDocumentReason` |  | |  |  | `CHAR(4)` | Reason for the Documented Credit Decision |
| `CreditDecisionDocumentStatus` |  | |  |  | `NUMC(1)` | DCD Status |
| `CreditDecisionDocumentPriority` |  | |  |  | `NUMC(1)` | DCD Priority |
| `CreditDecisionDocumentIsClosed` |  | |  |  | `CHAR(1)` |  |
| `CreditDecisionDocumentCategory` |  | |  |  | `CHAR(4)` | Category of the Documented Credit Decision |
| `CrdtDecisionDocumentLastAction` |  | |  |  | `NUMC(1)` | DCD Last Action |
| `NumberOfCreditDecisionDocs` |  | |  | `cast( NumberOfCreditDecisionDocs as numberofcreditdecisiondocs )` | `INT4(10)` | Number of Documented Credit Decisions |
| `CrdtDcsnDocCreationDate` |  | |  | `cast( CrdtDcsnDocCreationDate as ukm_dcd_created_date preserving type )` | `DATS(8)` | Created On |
| `CrdtDcsnDocLastChangeDate` |  | |  | `cast( CrdtDcsnDocLastChangeDate as ukm_dcd_change_date preserving type )` | `DATS(8)` | Changed On |
| `CrdtDcsnDocumentCloseDate` |  | |  | `cast( CrdtDcsnDocumentCloseDate as ukm_dcd_close_date preserving type )` | `DATS(8)` | Closed On |
| `CrdtDcsnDocPlannedCloseDate` |  | |  | `cast( CrdtDcsnDocPlannedCloseDate as ukm_dcd_planned_close_date preserving type )` | `DATS(8)` | Planned Close Date |
| `ProcessingDays` |  | |  |  | `INT4(10)` |  |
| `NmbrOfDaysPlndClsDateExceeded` |  | |  | `cast( NmbrOfDaysPlndClsDateExceeded as numberofdaysafterplannedclose preserving type )` | `INT4(10)` | Number of Days After Planned Closing Date |
| `CasePlannedCloseDateIsExceeded` |  | |  | `case when ( NmbrOfDaysPlndClsDateExceeded <= 0 ) then '' else 'X' end` | `CHAR(1)` |  |
| `RelatedSAPObjectType` |  | |  |  | `CHAR(30)` | SAP Object Node Type - Camel Case Node Name |
| `CreditDecisionReferenceDoc` |  | |  |  | `CHAR(70)` | Number of Document with Credit Block |
| `CreditDecisionReqUTCDateTime` |  | |  |  | `DEC(15)` | Request Time of Documented Credit Decision in UTC |
| `StaticLmtUtilznCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Static Check of Credit Limit Utilization |
| `MaxDocAmountCreditChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Maximum Document Value |
| `DynLimitUtilznCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Dynamic Check of Credit Limit Utilization |
| `MaxDunningLevelCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Maximum Dunning Level |
| `OldestOpenItemCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Oldest Open Item |
| `DaysSlsOutStdgCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Days Sales Outstanding (DSO) |
| `OverdueOpenItemCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Overdue Open Items |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `OpenCreditAmount` |  | |  | `cast( OpenCreditAmount as ukm_open_credit_amount preserving type )` | `CURR(15)` | Open Credit Amount |
| `CheckedCreditRiskAmount` |  | |  | `cast( CheckedCreditRiskAmount as ukm_checked_credit_risk_amount preserving type )` | `CURR(15)` | Amount for Which the Credit Check Was Performed |
| `CustomerCreditLimitAmount` |  | |  | `cast( _CreditAccountExtended( P_ExchangeRateType: $parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency, P_ReadLineItem : $parameters.P_ReadLineItem, P_KeyDate : $parameters.P_KeyDate ).CustomerCreditLimitAmount as farp_creditlimit_amt preserving type )` | `CURR(23)` | Customer's Credit Limit |
| `CustomerCreditExposureAmount` |  | |  | `cast(_CreditAccountExtended( P_ExchangeRateType: $parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency, P_ReadLineItem : $parameters.P_ReadLineItem, P_KeyDate : $parameters.P_KeyDate ).CustomerCreditExposureAmount as farp_credit_exposure preserving type )` | `CURR(23)` | Credit Exposure Amount |
| `_BusinessPartner` | | ✓ | | | | |
| `_CreditSegment` | | ✓ | | | | |
| `_CreditManagementBP` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_CreditRiskClass` | | ✓ | | | | |
| `_CrdtMBusPartnerGroup` | | ✓ | | | | |
| `_Category` | | ✓ | | | | |
| `_Processor` | | ✓ | | | | |
| `_CreatedBy` | | ✓ | | | | |
| `_ChangedBy` | | ✓ | | | | |
| `_ClosedBy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CreditSegment` | `I_CreditManagementSegment` | [1..1] |
| `_CreditManagementBP` | `I_CreditManagementBP` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_CreditRiskClass` | `I_CreditRiskClass` | [0..1] |
| `_CreditAccountExtended` | `I_CreditAccountExtended` | [0..1] |
| `_CrdtMBusPartnerGroup` | `I_CrdtMBusPartnerGroup` | [0..1] |
| `_Category` | `I_CrdtDecisionDocumentCategory` | [0..1] |
| `_Processor` | `I_CreditCaseContact` | [0..1] |
| `_CreatedBy` | `I_CreditCaseContact` | [0..1] |
| `_ChangedBy` | `I_CreditCaseContact` | [0..1] |
| `_ClosedBy` | `I_CreditCaseContact` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITDECISIONDOCUMENTC_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITDECISIONDOCUMENTC_2')/$value)*

```abap
@EndUserText: { label: 'Credit Decision Document V2 - Cube' }
@Analytics: { internalName: #LOCAL,
              dataCategory: #CUBE }
@VDM: { viewType: #COMPOSITE }
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData:       { blocking: #REQUIRED }, 
                  privilegedAssociations:['_Processor'] }
@ObjectModel: { usageType: { sizeCategory:   #XL,
                             serviceQuality: #D,
                             dataClass:      #MIXED },
                modelingPattern: #ANALYTICAL_CUBE,
                supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                         #SQL_DATA_SOURCE,
                                         #CDS_MODELING_DATA_SOURCE ] }
@Metadata: { allowExtensions:             true,
             ignorePropagatedAnnotations: true }
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_CreditDecisionDocumentC_2
  with parameters
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr,
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.defaultValue: 'Y' // Read also line items from BSEG
    @Semantics.booleanIndicator:true
    P_ReadLineItem     : read_fiar_lineitems,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate
  as select from P_DCD2_2
                 ( P_KeyDate : $parameters.P_KeyDate,
                   P_DisplayCurrency : $parameters.P_DisplayCurrency,
                   P_ExchangeRateType : $parameters.P_ExchangeRateType
                 )
  association [0..1] to I_BusinessPartner              as _BusinessPartner       on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [1..1] to I_CreditManagementSegment      as _CreditSegment         on  $projection.CreditSegment = _CreditSegment.CreditSegment
  association [0..1] to I_CreditManagementBP           as _CreditManagementBP    on  $projection.BusinessPartner = _CreditManagementBP.BusinessPartner
//  association [1..1] to I_SalesDocumentBasic           as _SalesDocument         on  $projection.CreditDecisionReferenceDoc = _SalesDocument.SalesDocument
//                                                                                 and $projection.RelatedSAPObjectType       = 'SALESORDER'
//  association [1..1] to I_DeliveryDocument             as _DeliveryDocument      on  $projection.CreditDecisionReferenceDoc = _DeliveryDocument.DeliveryDocument
//                                                                                 and $projection.RelatedSAPObjectType       = 'OUTBOUNDDELIVERY'
  association [0..1] to I_Country                      as _Country               on  $projection.Country = _Country.Country
  association [0..1] to I_Region                       as _Region                on  $projection.Country = _Region.Country
                                                                                 and $projection.Region  = _Region.Region
  association [0..1] to I_CreditRiskClass              as _CreditRiskClass       on  $projection.CreditRiskClass = _CreditRiskClass.CreditRiskClass

  association [0..1] to I_CreditAccountExtended        as _CreditAccountExtended on  $projection.BusinessPartner = _CreditAccountExtended.BusinessPartner
                                                                                 and $projection.CreditSegment   = _CreditAccountExtended.CreditSegment

  association [0..1] to I_CrdtMBusPartnerGroup         as _CrdtMBusPartnerGroup  on  $projection.CrdtMgmtBusinessPartnerGroup = _CrdtMBusPartnerGroup.CrdtMgmtBusinessPartnerGroup

  association [0..1] to I_CrdtDecisionDocumentCategory as _Category              on  $projection.CreditDecisionDocumentCategory = _Category.CreditDecisionDocumentCategory

  association [0..1] to I_CreditCaseContact            as _Processor             on $projection.CrdtDcsnDocumentProcessingUser = _Processor.UserID
  association [0..1] to I_CreditCaseContact            as _CreatedBy             on $projection.CrdtDcsnDocumentCreatedByUser = _CreatedBy.UserID
  association [0..1] to I_CreditCaseContact            as _ChangedBy             on $projection.CrdtDcsnDocLastChangedByUser = _ChangedBy.UserID
  association [0..1] to I_CreditCaseContact            as _ClosedBy              on $projection.CrdtDcsnDocumentClosedByUser = _ClosedBy.UserID
  
{
  key CreditDecisionDocumentUUID,
      CreditDecisionDocument,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      BusinessPartner,
      @ObjectModel.foreignKey.association: '_CrdtMBusPartnerGroup'
      _CreditManagementBP.CrdtMgmtBusinessPartnerGroup                                                        as CrdtMgmtBusinessPartnerGroup,
      @ObjectModel.foreignKey.association: '_CreditSegment'
      CreditSegment,
      @ObjectModel.foreignKey.association: '_Country'
      cast( _BusinessPartner._CurrentDefaultAddress._StandardAddress.Country as farp_country preserving type) as Country,

      @ObjectModel.foreignKey.association: '_Region'
      _BusinessPartner._CurrentDefaultAddress._StandardAddress.Region                                         as Region,
      @ObjectModel.foreignKey.association: '_CreditRiskClass'
      CreditRiskClass,

      @ObjectModel.foreignKey.association: '_Processor'
      CrdtDcsnDocumentProcessingUser,
      @ObjectModel.foreignKey.association: '_CreatedBy'
      CrdtDcsnDocumentCreatedByUser,
      @ObjectModel.foreignKey.association: '_ChangedBy'
      CrdtDcsnDocLastChangedByUser,
      @ObjectModel.foreignKey.association: '_ClosedBy'
      CrdtDcsnDocumentClosedByUser,
      
      CreditDecisionDocumentReason,
      CreditDecisionDocumentStatus,
      CreditDecisionDocumentPriority,
      
      @Semantics.booleanIndicator:true
      CreditDecisionDocumentIsClosed,

      @ObjectModel.foreignKey.association: '_Category'
      CreditDecisionDocumentCategory,
      CrdtDecisionDocumentLastAction,

      @Aggregation.default: #SUM
      @EndUserText.label: 'Open Documented Credit Decisions'
      cast( NumberOfCreditDecisionDocs as numberofcreditdecisiondocs )                                        as NumberOfCreditDecisionDocs,

      cast( CrdtDcsnDocCreationDate as ukm_dcd_created_date preserving type )                                 as CrdtDcsnDocCreationDate,
      cast( CrdtDcsnDocLastChangeDate as ukm_dcd_change_date preserving type )                                as CrdtDcsnDocLastChangeDate,
      cast( CrdtDcsnDocumentCloseDate as ukm_dcd_close_date preserving type )                                 as CrdtDcsnDocumentCloseDate,
      cast( CrdtDcsnDocPlannedCloseDate as ukm_dcd_planned_close_date preserving type )                       as CrdtDcsnDocPlannedCloseDate,

      //ProcessingHours,
      
      @Aggregation.default: #MAX
      ProcessingDays,

      @Aggregation.default: #MAX
      cast( NmbrOfDaysPlndClsDateExceeded as numberofdaysafterplannedclose preserving type )                  as NmbrOfDaysPlndClsDateExceeded,

      @EndUserText.label: 'Planned Close Date is Exceeded'
      @Semantics.booleanIndicator:true
      case when ( NmbrOfDaysPlndClsDateExceeded <= 0 )
        then ''
        else 'X'
      end                                                                                                     as CasePlannedCloseDateIsExceeded,
      
      RelatedSAPObjectType,
      CreditDecisionReferenceDoc,

      CreditDecisionReqUTCDateTime,
      @Semantics.booleanIndicator:true
      StaticLmtUtilznCrdtChkIsFailed,
      @Semantics.booleanIndicator:true
      MaxDocAmountCreditChkIsFailed,
      @Semantics.booleanIndicator:true
      DynLimitUtilznCrdtChkIsFailed,
      @Semantics.booleanIndicator:true
      MaxDunningLevelCrdtChkIsFailed,
      @Semantics.booleanIndicator:true
      OldestOpenItemCrdtChkIsFailed,
      @Semantics.booleanIndicator:true
      DaysSlsOutStdgCrdtChkIsFailed,
      @Semantics.booleanIndicator:true
      OverdueOpenItemCrdtChkIsFailed,

      // @Semantics.currencyCode:true
      DisplayCurrency,

      // Open Credit Amount
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( OpenCreditAmount as ukm_open_credit_amount preserving type )                                      as OpenCreditAmount,
      //
      // Checked Credit Amount
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CheckedCreditRiskAmount as ukm_checked_credit_risk_amount preserving type )                       as CheckedCreditRiskAmount,

      // Credit Limit Amount for BP in segment
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( _CreditAccountExtended(
                       P_ExchangeRateType: $parameters.P_ExchangeRateType,
                       P_DisplayCurrency: $parameters.P_DisplayCurrency,
                       P_ReadLineItem : $parameters.P_ReadLineItem,
                       P_KeyDate : $parameters.P_KeyDate ).CustomerCreditLimitAmount
                               as farp_creditlimit_amt preserving type )                                      as CustomerCreditLimitAmount,

      // Credit Exposure Amount for BP in segment
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(_CreditAccountExtended(
                       P_ExchangeRateType: $parameters.P_ExchangeRateType,
                       P_DisplayCurrency: $parameters.P_DisplayCurrency,
                       P_ReadLineItem : $parameters.P_ReadLineItem,
                       P_KeyDate : $parameters.P_KeyDate ).CustomerCreditExposureAmount
                               as farp_credit_exposure preserving type )                                      as CustomerCreditExposureAmount,

      // Associations
      _BusinessPartner,
      _CreditSegment,
      _Country,
      _Region,
      _CreditRiskClass,
      _CreditManagementBP,
//      _SalesDocument,
//      _DeliveryDocument,
      _Category,
      _CrdtMBusPartnerGroup,
      _Processor,
      _CreatedBy,
      _ChangedBy,
      _ClosedBy
}
where
  CreditDecisionDocumentIsClosed is initial //show only open cases
```
