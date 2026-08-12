---
name: C_RECONTRACTDEX
description: "Extraction for REContract"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTDEX')/$value
semantic_en: "Extraction for REContract"
semantic_vi: "Extraction for REContract — CDS view tiêu dùng dựa trên I_REContract."
keywords:
  - "Extraction for REContract"
  - "extraction"
  - "for"
  - "recontract"
  - "internal"
  - "real"
  - "estate"
  - "number"
  - "company"
  - "code"
  - "contract"
  - "status"
  - "object"
tags:
  - RE
  - component:RE-FX-CN-2CL
  - consumption-view
  - contract
  - RE-FX
  - RE-FX-CN
  - RE-FX-CN-2CL
---
# C_RECONTRACTDEX

**Extraction for REContract**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalRealEstateNumber` | ✓ | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `REStatusObject` |  | |  |  | `CHAR(22)` | Object Number |
| `REInternalFinNumber` |  | |  |  | `CHAR(8)` | Internal Key of Real Estate Object (FI) |
| `RECreationType` |  | |  |  | `CHAR(1)` | How the Object Was Created |
| `REAuthorizationGroup` |  | |  |  | `CHAR(40)` | Authorization Group |
| `REContractType` |  | |  |  | `CHAR(4)` | Contract Type |
| `ContractStartDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `ContractEndDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `REContractName` |  | |  |  | `CHAR(80)` | Contract Name |
| `REContractActivateDate` |  | |  |  | `DATS(8)` | Active From |
| `RETenancyLaw` |  | |  |  | `CHAR(5)` | Tenancy Law |
| `REContractNumberOld` |  | |  |  | `CHAR(20)` | Number of Old Contract |
| `REMainContractCompanyCode` |  | |  |  | `CHAR(4)` | Company code of main contract |
| `REMainContract` |  | |  |  | `CHAR(13)` | Number of Real Estate Main Contract |
| `REContractCurrency` |  | |  |  | `CUKY(5)` | Currency for Contract |
| `RECashFlowPostingFromDate` |  | |  |  | `DATS(8)` | First Posting From |
| `REBusinessEntity` |  | |  |  | `CHAR(8)` | RE Business Entity |
| `REObjectAvailableFromDate` |  | |  |  | `DATS(8)` | Transfer of Possession Start Date |
| `REObjectAvailableToDate` |  | |  |  | `DATS(8)` | Transfer of Possession End Date |
| `REHasMultipleAssignments` |  | |  |  | `CHAR(1)` | Multiple Assignment of Object to Group Allowed |
| `RealEstateObjectType` |  | |  |  | `CHAR(2)` | Object Type |
| `REIdentificationKey` |  | |  |  | `CHAR(45)` | ID Part Key, for example "1000/123" |
| `_CompanyCode` | | ✓ | | | | |
| `_REObjectType` | | ✓ | | | | |
| `_RECreationType` | | ✓ | | | | |
| `_StatusObject` | | ✓ | | | | |
| `_REContractType` | | ✓ | | | | |
| `_RETenancyLaw` | | ✓ | | | | |
| `_MainContractCompanyCode` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_REAuthorizationGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_REContract` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK

@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName:#LOCAL 
}

@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'InternalRealEstateNumber'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION ]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.sapObjectNodeType.name: 'RealEstateContract'
@AbapCatalog.extensibility: {
 extensible: true,
 allowNewDatasources: false,
 dataSources: ['_Extension'],
 elementSuffix: 'Rec',
 quota: { maximumBytes: 8160, maximumFields: 408 },
 allowNewCompositions: false }

@EndUserText.label: 'Extraction for REContract'
define view entity C_REContractDEX
  as select from I_REContract
  association [1..1] to E_REContract                 as _Extension                  on  $projection.InternalRealEstateNumber = _Extension.InternalRealEstateNumber
{
  key InternalRealEstateNumber,
      CompanyCode,
      RealEstateContract,
      REStatusObject,
      REInternalFinNumber,
      RECreationType,
      //  CreatedByUser,
      //  CreationDate,
      //  CreationTime,
      //  RESourceOfCreation,
      //  LastChangedByUser,
      //  LastChangeDate,
      //  LastChangeTime,
      //  RESourceOfChange,
      //  Responsible,
      //  REUserExclusive,
      REAuthorizationGroup,
      REContractType,
      ContractStartDate,
      ContractEndDate,
      REContractName,
      REContractActivateDate,
      RETenancyLaw,
      REContractNumberOld,
      REMainContractCompanyCode,
      REMainContract,
      REContractCurrency,
      //  REIndustrySector,
      //  REIsSalesRelevant,
      //  REContractDepositType,
      //  REContractSignDate,
      //  REContract2SignDate,
      //  REContractCashFlowDate,
      //  REContractFirstEndDate,
      //  REContractNoticeDate,
      //  REContractNoticeInDate,
      //  REContractNoticeReason,
      //  REContractNoticeActivationDate,
      //  RECashFlowArchivedToDate,
      //  RECashFlowLockedToDate,
      RECashFlowPostingFromDate,
      REBusinessEntity,
      REObjectAvailableFromDate,
      REObjectAvailableToDate,
      REHasMultipleAssignments,
      //  REPossessionStartDate,
      //  REPossessionEndDate,
      //  ValuationRelevance,
      RealEstateObjectType,
      REIdentificationKey,
//      REBusinessPartnerRole1,
      
       _CompanyCode,
       _REObjectType,
       _RECreationType,
       _StatusObject,
       _REContractType,
       _RETenancyLaw,
       _MainContractCompanyCode,
       _Currency,
       _REAuthorizationGroup
}
```
