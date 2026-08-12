---
name: C_RECONTRACTASSIGNSUBJECTQ_2
description: "RE Contract Subject Assignments"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTASSIGNSUBJECTQ_2')/$value
semantic_en: "RE Contract Subject Assignments"
semantic_vi: "RE Contract Subject Assignments — CDS view tiêu dùng dựa trên I_REContractAssignSubjectC_2."
keywords:
  - "contract"
  - "subject"
  - "assignments"
  - "company"
  - "code"
  - "real"
  - "estate"
  - "internal"
  - "number"
  - "object"
  - "responsible"
tags:
  - RE
  - component:RE-FX-CN-2CL
  - consumption-view
  - contract
  - RE-FX
  - RE-FX-CN
  - RE-FX-CN-2CL
---
# C_RECONTRACTASSIGNSUBJECTQ_2

**RE Contract Subject Assignments**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTASSIGNSUBJECTQ_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `ObjectInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `Responsible` |  | |  |  | `CHAR(12)` | Person Responsible |
| `ResponsibleUserFullName` |  | |  |  | `CHAR(80)` | User Description |
| `REContractName` |  | |  |  | `CHAR(80)` | Contract Name |
| `ContractStartDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `ContractEndDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `REContractFirstEndDate` |  | |  |  | `DATS(8)` | Date of First Contract End |
| `REContractNumberOld` |  | |  |  | `CHAR(20)` | Number of Old Contract |
| `REAuthorizationGroup` |  | |  |  | `CHAR(40)` | Authorization Group |
| `ValuationRelevance` |  | |  |  | `CHAR(10)` | Valuation Relevance |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `REContractType` |  | |  |  | `CHAR(4)` | Contract Type |
| `REContractTypeName` |  | |  |  | `CHAR(30)` | Contract Type Name |
| `ObjectValidFrom` |  | |  |  | `DATS(8)` | Validity Start Date |
| `ObjectValidTo` |  | |  |  | `DATS(8)` | Validity End Date |
| `REContractSubjectNumber` |  | |  |  | `NUMC(4)` | Contract Object Number |
| `REContractSubjectDescription` |  | |  |  | `CHAR(60)` | Name of Contract Object |
| `REContractSubjectClass` |  | |  |  | `CHAR(4)` | Contract Object Class |
| `REContractSubjectClassName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `REContractSubjectType` |  | |  |  | `CHAR(6)` | Type of Contract Object |
| `REContractSubjectTypeName` |  | |  |  | `CHAR(60)` | Description of Contract Object Type |
| `REAccountingObject` |  | |  |  | `CHAR(22)` | Object Number Account Assignment |
| `REAccountingObjectType` |  | |  |  | `CHAR(2)` | Object Type |
| `REAccountingObjectName` |  | |  |  | `CHAR(50)` | Complete Object Identification, for Example BE 1000/123 |
| `NumberOfREContracts` |  | |  |  | `INT4(10)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTASSIGNSUBJECTQ_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTASSIGNSUBJECTQ_2')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'CRECONTRASSSUBQ2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'RE Contract Subject Assignments'
@Metadata.ignorePropagatedAnnotations:true 

@Analytics.query: true
@VDM.viewType: #CONSUMPTION
@ObjectModel.modelingPattern:           #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_QUERY ]

define view C_REContractAssignSubjectQ_2
  // Start of insertion Parameters
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_ValidFrom :vdm_validitystart, //recncnbeg,
    @Environment.systemField: #SYSTEM_DATE
    P_ValidTo   :vdm_validityend //recncnendabs
  //  // end of insertion Parameters
  as select from I_REContractAssignSubjectC_2(P_ValidFrom:$parameters.P_ValidFrom, P_ValidTo:$parameters.P_ValidTo )
{

  /** Dimensions **/

  @AnalyticsDetails.query.display: #KEY
  @AnalyticsDetails.query.axis: #FREE
  CompanyCode,
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE
  RealEstateContract,
  @AnalyticsDetails.query.axis: #FREE
  InternalRealEstateNumber,
  @AnalyticsDetails.query.axis: #FREE
  ObjectInternalID,

  @AnalyticsDetails.query.axis: #FREE
  Responsible,
  @AnalyticsDetails.query.axis: #FREE
  ResponsibleUserFullName,
  @AnalyticsDetails.query.axis: #FREE
  REContractName,

  @AnalyticsDetails.query.axis: #FREE
  ContractStartDate,
  
  @AnalyticsDetails.query.axis: #FREE
  ContractEndDate,

  @AnalyticsDetails.query.axis: #FREE
  REContractFirstEndDate,
  @AnalyticsDetails.query.axis: #FREE
  REContractNumberOld,

  @AnalyticsDetails.query.axis: #FREE
  REAuthorizationGroup,
  @AnalyticsDetails.query.axis: #FREE
  ValuationRelevance,
 //@AnalyticsDetails.query.axis: #FREE
  //ValuationRelevanceDesc,

  @AnalyticsDetails.query.axis: #FREE
  CompanyCodeName,
  @AnalyticsDetails.query.axis: #FREE
  REContractType,
  @AnalyticsDetails.query.axis: #FREE
  REContractTypeName,

  @AnalyticsDetails.query.display: #KEY
  @AnalyticsDetails.query.axis: #FREE
  ObjectValidFrom,
  @AnalyticsDetails.query.axis: #FREE
  ObjectValidTo,
  @AnalyticsDetails.query.display: #KEY
  @AnalyticsDetails.query.axis: #FREE
  REContractSubjectNumber,
  @AnalyticsDetails.query.axis: #FREE
  REContractSubjectDescription,
  @AnalyticsDetails.query.axis: #FREE
  REContractSubjectClass,
  @AnalyticsDetails.query.axis: #FREE
  REContractSubjectClassName,
  @AnalyticsDetails.query.axis: #FREE
  REContractSubjectType,
  @AnalyticsDetails.query.axis: #FREE
  REContractSubjectTypeName,
  @AnalyticsDetails.query.axis: #FREE
  REAccountingObject,
  @AnalyticsDetails.query.axis: #FREE
  REAccountingObjectType,
  @AnalyticsDetails.query.axis: #FREE
  REAccountingObjectName,
  

  /** Measures **/
  @EndUserText.label: 'Number of Contracts'
  NumberOfREContracts

}
```
