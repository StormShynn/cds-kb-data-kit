---
name: C_RECONTRACTVALIDQ
description: "Valid Contract Report"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTVALIDQ')/$value
semantic_en: "Valid Contract Report"
semantic_vi: "Valid Contract Report — CDS view tiêu dùng dựa trên I_REContractValid."
keywords:
  - "valid"
  - "contract"
  - "report"
  - "company"
  - "code"
  - "real"
  - "estate"
  - "internal"
  - "number"
  - "object"
  - "start"
  - "date"
tags:
  - RE
  - bo:purchaseorder
  - component:RE-FX-CN-2CL
  - consumption-view
  - contract
  - RE-FX
  - RE-FX-CN
  - RE-FX-CN-2CL
---
# C_RECONTRACTVALIDQ

**Valid Contract Report**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTVALIDQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `ObjectInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `ContractStartDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `ContractEndDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Entered By |
| `CreatedByUserDescription` |  | |  |  | `CHAR(80)` | User Description |
| `CreationDate` |  | |  |  | `DATS(8)` | First Entered On |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Edited On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Last Edited At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Employee ID |
| `LastChangedByUserDescription` |  | |  |  | `CHAR(80)` | User Description |
| `Responsible` |  | |  |  | `CHAR(12)` | Person Responsible |
| `ResponsibleUserFullName` |  | |  |  | `CHAR(80)` | User Description |
| `REContractName` |  | |  |  | `CHAR(80)` | Contract Name |
| `REContractFirstEndDate` |  | |  |  | `DATS(8)` | Date of First Contract End |
| `REContractNumberOld` |  | |  |  | `CHAR(20)` | Number of Old Contract |
| `REMainContractCompanyCode` |  | |  |  | `CHAR(4)` | Company code of main contract |
| `REMainContract` |  | |  |  | `CHAR(13)` | Number of Real Estate Main Contract |
| `REAuthorizationGroup` |  | |  |  | `CHAR(40)` | Authorization Group |
| `ValuationRelevance` |  | |  |  | `CHAR(10)` | Valuation Relevance |
| `ValuationRelevanceDesc` |  | |  |  | `CHAR(60)` | Description for Valuation Relevance |
| `REIdentificationType` |  | |  |  | `CHAR(2)` |  |
| `REIdentificationKey` |  | |  |  | `CHAR(45)` | ID Part Key, for example "1000/123" |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `REContractType` |  | |  |  | `CHAR(4)` | Contract Type |
| `REContractTypeName` |  | |  |  | `CHAR(30)` | Contract Type Name |
| `REContractSystStatus` |  | |  |  | `SSTR(224)` | Concatenated Contract System Status |
| `REContractUserStatus` |  | |  |  | `SSTR(224)` | Concatenated Contract User Status |
| `REContractStatus` |  | |  |  | `SSTR(449)` |  |
| `IsActive` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `NumberOfREContracts` |  | |  |  | `INT4(10)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTVALIDQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTVALIDQ')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'CRECONTRACTVALQ'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Valid Contract Report'
@Metadata.ignorePropagatedAnnotations: true

@Analytics.query: true
@VDM.viewType: #CONSUMPTION
@ObjectModel.modelingPattern:           #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_QUERY ]
@OData.publish: true

define view C_REContractValidQ
// Start of insertion Parameters
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_ValidFrom :vdm_validitystart,  //recncnbeg,
    @Environment.systemField: #SYSTEM_DATE
    P_ValidTo   :vdm_validityend  //recncnendabs
//  // end of insertion Parameters
    as 
    select from I_REContractValid(P_ValidFrom:$parameters.P_ValidFrom, P_ValidTo:$parameters.P_ValidTo ) as _ContractValid
{

    /** Dimensions **/
    
        @AnalyticsDetails.query.display: #KEY_TEXT
        @AnalyticsDetails.query.axis: #ROWS
        CompanyCode,
        @AnalyticsDetails.query.display: #KEY_TEXT
        @AnalyticsDetails.query.axis: #FREE
        RealEstateContract,
        @AnalyticsDetails.query.display: #KEY_TEXT
        @AnalyticsDetails.query.axis: #FREE
        InternalRealEstateNumber,
        @AnalyticsDetails.query.display: #KEY
        @AnalyticsDetails.query.axis: #FREE
        ObjectInternalID,
        @AnalyticsDetails.query.axis: #FREE
        ContractStartDate,
        @AnalyticsDetails.query.axis: #FREE
        ContractEndDate,
//      Admin,
        @AnalyticsDetails.query.axis: #FREE
      CreatedByUser,
      @AnalyticsDetails.query.axis: #FREE
      CreatedByUserDescription,
      @AnalyticsDetails.query.axis: #FREE
      CreationDate,
      @AnalyticsDetails.query.axis: #FREE
      CreationTime,
      @AnalyticsDetails.query.axis: #FREE
      LastChangeDate,
      LastChangeTime,
      @AnalyticsDetails.query.axis: #FREE
      LastChangedByUser,
      @AnalyticsDetails.query.axis: #FREE
      LastChangedByUserDescription,
      @AnalyticsDetails.query.axis: #FREE
      Responsible,
      @AnalyticsDetails.query.axis: #FREE
      ResponsibleUserFullName,
      @AnalyticsDetails.query.axis: #FREE
      REContractName,
      @AnalyticsDetails.query.axis: #FREE
      REContractFirstEndDate,
      @AnalyticsDetails.query.axis: #FREE
      REContractNumberOld,
      @AnalyticsDetails.query.axis: #FREE
      REMainContractCompanyCode,
      @AnalyticsDetails.query.axis: #FREE
      REMainContract,
      @AnalyticsDetails.query.axis: #FREE
      REAuthorizationGroup,
      @AnalyticsDetails.query.axis: #FREE
      ValuationRelevance,
      @AnalyticsDetails.query.axis: #FREE
      ValuationRelevanceDesc,
      REIdentificationType,
      @AnalyticsDetails.query.axis: #FREE
      REIdentificationKey,
      @AnalyticsDetails.query.axis: #FREE
      CompanyCodeName,
      @AnalyticsDetails.query.axis: #FREE
      REContractType,
      @AnalyticsDetails.query.axis: #FREE
      REContractTypeName,
      @AnalyticsDetails.query.axis: #FREE
      REContractSystStatus,
      @AnalyticsDetails.query.axis: #FREE
      REContractUserStatus,
      REContractStatus,
        @AnalyticsDetails.query.display: #KEY_TEXT
        @AnalyticsDetails.query.axis: #FREE
        IsActive,
        @AnalyticsDetails.query.display: #KEY_TEXT
        @AnalyticsDetails.query.axis: #FREE
        IsDeleted,
        @AnalyticsDetails.query.display: #KEY_TEXT
        @AnalyticsDetails.query.axis: #FREE
        Country,

      
      /** Measures **/
      NumberOfREContracts

}
```
