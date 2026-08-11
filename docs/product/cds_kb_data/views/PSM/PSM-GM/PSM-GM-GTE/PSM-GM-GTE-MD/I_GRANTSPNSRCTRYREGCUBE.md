---
name: I_GRANTSPNSRCTRYREGCUBE
description: "Grant Sponsor Country Region - Cube"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPNSRCTRYREGCUBE')/$value
semantic_en: "Grant Sponsor Country Region - Cube"
semantic_vi: "Grant Sponsor Country Region - Cube — CDS view giao diện dựa trên I_GrantSpnsrCtryReg."
keywords:
  - "grant"
  - "sponsor"
  - "country"
  - "region"
  - "cube"
  - "actual"
  - "plan"
  - "code"
  - "grantee"
  - "mgmt"
  - "lifecycle"
  - "status"
  - "company"
  - "currency"
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_GRANTSPNSRCTRYREGCUBE

**Grant Sponsor Country Region - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPNSRCTRYREGCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `ActualPlanCode` | ✓ | |  |  | `CHAR(1)` | Actual Plan Code |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  | `sum(AcItem.AmountInCompanyCodeCurrency)` | `CURR(23)` |  |
| `CountryRegion` |  | |  |  | `CHAR(6)` |  |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLfcycStatusForAuthzn` |  | |  |  | `CHAR(5)` | GM Lifecycle Status for Auth Grp |
| `_CountryRegionGeoPoint` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CountryRegionGeoPoint` | `I_PubSecCtryRegGeoPoint` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPNSRCTRYREGCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPNSRCTRYREGCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMGRANTGEOC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Grant Sponsor Country Region - Cube'

 
@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL
     },
     modelingPattern: #ANALYTICAL_CUBE,
     supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
}
define view I_GrantSpnsrCtryRegCube  
  as select from            I_GrantSpnsrCtryReg                   as GrantSpnsrCtryReg
  left outer to many join  I_ActualPlanJournalEntryItem as AcItem on GrantSpnsrCtryReg.GrantID = AcItem.GrantID
                                                                                                                                                                       
  association [0..1] to I_PubSecCtryRegGeoPoint as _CountryRegionGeoPoint                 on  $projection.CountryRegion  = _CountryRegionGeoPoint.CountryRegion    

{
  key AcItem.GrantID,
  key AcItem.ActualPlanCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Sponsor'
      GrantSpnsrCtryReg.GranteeMgmtSponsor,
      GrantSpnsrCtryReg.GrantLifecycleStatus,
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      @Semantics.currencyCode:true
      AcItem.CompanyCodeCurrency,
      @EndUserText.label: 'Amount in company code currency'
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      sum(AcItem.AmountInCompanyCodeCurrency) as AmountInCompanyCodeCurrency,
      @EndUserText.label: 'Country & Region'
      @ObjectModel.foreignKey.association: '_CountryRegionGeoPoint'
      GrantSpnsrCtryReg.CountryRegion,

      AcItem._CompanyCodeCurrency,

      GrantSpnsrCtryReg._Sponsor,

     _CountryRegionGeoPoint,
     /* Fields for Authorization */
      @Consumption.hidden: true
      GrantSpnsrCtryReg.GrantAuthznGrp,
      @Consumption.hidden: true
      GrantSpnsrCtryReg.GrantLfcycStatusForAuthzn

}
where
  (
    (
           AcItem.ActualPlanCode                             =  'P'
    )
    or  
    (
           AcItem.ActualPlanCode                             =  'A'
      and 
      (
           AcItem.PubSecBudgetIsRelevant                     =  'X'
      )
    )
  )
  and

  (
       
           (
             GrantSpnsrCtryReg.GrantIsNotRelevantGrant           <> 'X'
             and
             (
                  AcItem._Fund._FundType.GranteeMgmtFundType =  'I'
               or AcItem._Fund._FundType.GranteeMgmtFundType =  ''
               or AcItem._Fund._FundType.GranteeMgmtFundType is null
             )

           )
    or(
          GrantSpnsrCtryReg.GrantIsNotRelevantGrant             <> 'X'
      and  AcItem._Fund._FundType.GranteeMgmtFundType        =  'E'
    
    )
  )
  group by AcItem.GrantID,
   AcItem.ActualPlanCode,
      GrantSpnsrCtryReg.GranteeMgmtSponsor,
      GrantSpnsrCtryReg.GrantLifecycleStatus,
      AcItem.CompanyCodeCurrency,
      GrantSpnsrCtryReg.CountryRegion,
      GrantSpnsrCtryReg.GrantAuthznGrp,
      GrantSpnsrCtryReg.GrantLfcycStatusForAuthzn
```
