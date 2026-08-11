---
name: I_GRANTSPONSORLOCATIONCUBE
description: "Sponsor Location - Cube"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSORLOCATIONCUBE')/$value
semantic_en: "Sponsor Location - Cube"
semantic_vi: "Sponsor Location - Cube — CDS view giao diện dựa trên I_GrantSpnsrCtryReg."
keywords:
  - "sponsor"
  - "location"
  - "cube"
  - "grant"
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
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
---
# I_GRANTSPONSORLOCATIONCUBE

**Sponsor Location - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSORLOCATIONCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `ActualPlanCode` | ✓ | |  |  | `CHAR(1)` | Actual Plan Code |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  | `sum(AcItem.AmountInCompanyCodeCurrency)` | `CURR(23)` |  |
| `AmountInGlobalCurrency` |  | |  | `sum(AcItem.AmountInGlobalCurrency)` | `CURR(23)` |  |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CountryRegion` |  | |  |  | `CHAR(6)` |  |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLfcycStatusForAuthzn` |  | |  |  | `CHAR(5)` | GM Lifecycle Status for Auth Grp |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `_CountryRegionGeoPoint` | | ✓ | | | | |
| `_CountryGeoPoint` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CountryRegionGeoPoint` | `I_PubSecCtryRegGeoPoint` | [0..1] |
| `_CountryGeoPoint` | `I_PubSecCountryGeoPoint` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSORLOCATIONCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSORLOCATIONCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMTSPLOCCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Sponsor Location - Cube'


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
define view I_GrantSponsorLocationCube    
 as select from            I_GrantSpnsrCtryReg                   as GrantSpnsrCtryReg
  left outer to many join  I_ActualPlanJournalEntryItem as AcItem on GrantSpnsrCtryReg.GrantID = AcItem.GrantID
                                                                                                                                                                       
  association [0..1] to I_PubSecCtryRegGeoPoint as _CountryRegionGeoPoint                 on  $projection.CountryRegion  = _CountryRegionGeoPoint.CountryRegion
                                                                                           
  
  association [0..1] to I_PubSecCountryGeoPoint  as _CountryGeoPoint                       on $projection.country  = _CountryGeoPoint.Country
                                                                                           
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
      @EndUserText.label: 'Amount in global currency'
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      sum(AcItem.AmountInGlobalCurrency) as AmountInGlobalCurrency,
      AcItem.GlobalCurrency,
      @EndUserText.label: 'Country & Region'
      @ObjectModel.foreignKey.association: '_CountryRegionGeoPoint'
      GrantSpnsrCtryReg.CountryRegion,

      AcItem._CompanyCodeCurrency,

      GrantSpnsrCtryReg._Sponsor,
      @EndUserText.label: 'Country & Region'
      @ObjectModel.foreignKey.association: '_CountryGeoPoint'
      GrantSpnsrCtryReg._Sponsor._CurrentDefaultAddress._AddressDefaultRepresentation.Country,

      _CountryRegionGeoPoint,
      _CountryGeoPoint,
      AcItem._GlobalCurrency,
     /* Fields for Authorization */
      @Consumption.hidden: true
      GrantSpnsrCtryReg.GrantAuthznGrp,
      @Consumption.hidden: true
      GrantSpnsrCtryReg.GrantLfcycStatusForAuthzn,
      @Consumption.hidden: true
      GrantSpnsrCtryReg.GrantIsNotRelevantGrant

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
      AcItem.GlobalCurrency,
      GrantSpnsrCtryReg.CountryRegion,
      GrantSpnsrCtryReg.GrantAuthznGrp,
      GrantSpnsrCtryReg.GrantLfcycStatusForAuthzn,
      GrantSpnsrCtryReg.GrantIsNotRelevantGrant,
      GrantSpnsrCtryReg._Sponsor._CurrentDefaultAddress._AddressDefaultRepresentation.Country
```
