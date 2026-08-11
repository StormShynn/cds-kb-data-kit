---
name: I_SITE
description: "Retail Site"
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITE')/$value
semantic_en: "Retail Site"
semantic_vi: "I_SITE — CDS view cơ bản dựa trên I_Plant."
keywords:
  - "site"
  - "name"
  - "customer"
  - "supplier"
  - "address"
tags:
  - LO
  - bo:plant
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
---
# I_SITE

**Retail Site**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Site` | ✓ | |  | `Plant` | `CHAR(4)` | Plant |
| `SiteName` |  | |  | `cast(PlantName as sitename preserving type)` | `CHAR(30)` | Site Name |
| `SiteCustomer` |  | |  | `PlantCustomer` | `CHAR(10)` | Customer Number of Plant |
| `SiteSupplier` |  | |  | `PlantSupplier` | `CHAR(10)` | Supplier Number of Plant |
| `AddressID` |  | |  |  | `CHAR(10)` | Address |
| `SiteCategory` |  | |  | `cast(PlantCategory as sitecategory preserving type)` | `CHAR(1)` | Site Category |
| `SalesOrganization` |  | |  | `cast(SalesOrganization as w_vkorg_header preserving type)` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  | `cast(DistributionChannel as w_vtweg_header preserving type)` | `CHAR(2)` | Distribution Channel |
| `DefaultPurchasingOrganization` |  | |  | `cast(DefaultPurchasingOrganization as ekorg_ll preserving type)` | `CHAR(4)` | Purchasing Organization |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Factory calendar key |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `IsMarkedForArchiving` |  | |  |  | `CHAR(1)` | Central archiving marker for master record |
| `Division` |  | |  |  | `CHAR(2)` | Division for Intercompany Billing |
| `_SiteCategoryText` |  | |  | `_PlantCategoryText` |  |  |
| `_SiteOpeningHours` | | ✓ | | | | |
| `_SitePointOfSale` | | ✓ | | | | |
| `_SiteBlocking` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_DefaultPurchasingOrganization` | | ✓ | | | | |
| `_FactoryCalendar` | | ✓ | | | | |
| `_AddressEmailAddress` | | ✓ | | | | |
| `_SiteProductGroup` | | ✓ | | | | |
| `_SiteSupplyingSite` | | ✓ | | | | |
| `_AssortmentUser` | | ✓ | | | | |
| `_SiteReferenceSite` | | ✓ | | | | |
| `_SiteCategory` | | ✓ | | | | |
| `_SiteMasterAdminFields` | | ✓ | | | | |
| `_SiteInventory` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_OrganizationAddress` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SiteOpeningHours` | `I_SiteOpeningHours` | [0..1] |
| `_SitePointOfSale` | `I_SitePointOfSale` | [0..1] |
| `_SiteBlocking` | `I_SiteBlocking` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [1..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [1..1] |
| `_DefaultPurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_FactoryCalendar` | `I_FactoryCalendar` | [0..1] |
| `_AddressEmailAddress` | `I_AddressEmailAddress` | [0..1] |
| `_SiteProductGroup` | `I_SiteProductGroup` | [0..*] |
| `_SiteSupplyingSite` | `I_SiteSupplyingSite` | [0..*] |
| `_AssortmentUser` | `I_AssortmentUser` | [0..*] |
| `_SiteReferenceSite` | `I_SiteReferenceSite` | [1..1] |
| `_SiteCategory` | `I_SiteCategory` | [1..1] |
| `_SiteMasterAdminFields` | `I_SiteMasterAdministrativeData` | [0..1] |
| `_SiteInventory` | `I_SiteValnAndInvtryManagement` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITE')/$value)*

```abap
@EndUserText: {label: 'Retail Site'}
@AbapCatalog: {
    sqlViewName: 'ISITE',
    compiler: {
        compareFilter: true
    }
} 

@AccessControl: {
    authorizationCheck: #CHECK,
    personalData.blocking: #NOT_REQUIRED
}

@AbapCatalog.preserveKey:true

@Metadata.ignorePropagatedAnnotations: true

@ClientHandling: {algorithm: #SESSION_VARIABLE}
@VDM: {viewType: #BASIC}

@ObjectModel: {
    compositionRoot: true,
    semanticKey: 'Site',
    representativeKey: 'Site',
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET ],
    usageType: {
        serviceQuality: #A,
        sizeCategory: #M,
        dataClass: #MASTER
   }
}

define view I_Site
  as select from I_Plant
  association [0..1] to I_SiteOpeningHours       as _SiteOpeningHours              on  $projection.SiteCustomer = _SiteOpeningHours.SiteCustomer
  association [0..1] to I_SitePointOfSale        as _SitePointOfSale               on  $projection.SiteCustomer = _SitePointOfSale.SiteCustomer
  association [0..1] to I_SiteBlocking           as _SiteBlocking                  on  $projection.SiteCustomer = _SiteBlocking.SiteCustomer
  association [1..1] to I_SalesOrganization      as _SalesOrganization             on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [1..1] to I_DistributionChannel    as _DistributionChannel           on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
  association [1..1] to I_PurchasingOrganization as _DefaultPurchasingOrganization on  $projection.DefaultPurchasingOrganization = _DefaultPurchasingOrganization.PurchasingOrganization
  association [0..1] to I_FactoryCalendar        as _FactoryCalendar               on  $projection.FactoryCalendar = _FactoryCalendar.FactoryCalendar
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
  association [0..1] to I_AddressEmailAddress    as _AddressEmailAddress           on  $projection.AddressID                      = _AddressEmailAddress.AddressID
                                                                                   and _AddressEmailAddress.Person                = ' '
                                                                                   and _AddressEmailAddress.IsDefaultEmailAddress = 'X'
  association [0..*] to I_SiteProductGroup       as _SiteProductGroup              on  $projection.SiteCustomer = _SiteProductGroup.SiteCustomer
  association [0..*] to I_SiteSupplyingSite      as _SiteSupplyingSite             on  $projection.SiteCustomer = _SiteSupplyingSite.SiteCustomer
  association [0..*] to I_AssortmentUser         as _AssortmentUser                on  $projection.SiteCustomer = _AssortmentUser.SiteCustomer
  association [1..1] to I_SiteReferenceSite      as _SiteReferenceSite             on  $projection.Site = _SiteReferenceSite.Site
  /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
  association [1..1] to I_SiteCategory           as _SiteCategory                  on  $projection.SiteCategory = _SiteCategory.SiteCategory
  association [0..1] to I_SiteMasterAdministrativeData as _SiteMasterAdminFields   on  $projection.SiteCustomer = _SiteMasterAdminFields.SiteCustomer
  association [0..1] to I_SiteValnAndInvtryManagement  as _SiteInventory           on  $projection.SiteCustomer = _SiteInventory.SiteCustomer  
 
{
      @ObjectModel: {text: {element: 'SiteName'}}
  key Plant                                                           as Site,
      @Semantics.text:true
      cast(PlantName as sitename preserving type)                     as SiteName,
      PlantCustomer                                                   as SiteCustomer,
      PlantSupplier                                                   as SiteSupplier,
      AddressID,
      cast(PlantCategory as sitecategory preserving type)             as SiteCategory,
      @ObjectModel: {foreignKey: {association: '_SalesOrganization'}}
      cast(SalesOrganization as w_vkorg_header preserving type)       as SalesOrganization,
      @ObjectModel: {foreignKey: {association: '_DistributionChannel'}}
      cast(DistributionChannel as w_vtweg_header preserving type)     as DistributionChannel,
      @ObjectModel: {foreignKey: {association: '_DefaultPurchasingOrganization'}}
      cast(DefaultPurchasingOrganization as ekorg_ll preserving type) as DefaultPurchasingOrganization,
      @EndUserText: {quickInfo: 'Calendar', label: 'Calendar'}
      @ObjectModel: {foreignKey: {association: '_FactoryCalendar'}}
      FactoryCalendar,
      ValuationArea,
      IsMarkedForArchiving,
      Division,
      @ObjectModel: {association: {type: [#TO_COMPOSITION_CHILD]}}
      _SiteOpeningHours,
      @ObjectModel: {association: {type: [#TO_COMPOSITION_CHILD]}}
      _SitePointOfSale,
      @ObjectModel: {association: {type: [#TO_COMPOSITION_CHILD]}}
      _SiteBlocking,
      _Address,
      _OrganizationAddress,
      _Customer,
      _Supplier,
      /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
      _PlantCategoryText                                              as _SiteCategoryText,

      _SalesOrganization,
      _DistributionChannel,
      _DefaultPurchasingOrganization,
      _FactoryCalendar,
      _AddressEmailAddress,
      @ObjectModel: {association: {type: [#TO_COMPOSITION_CHILD]}}
      _SiteProductGroup,
      @ObjectModel: {association: {type: [#TO_COMPOSITION_CHILD]}}
      _SiteSupplyingSite,
      _AssortmentUser,
      @ObjectModel: {association: {type: [#TO_COMPOSITION_CHILD]}}
      _SiteReferenceSite,
      @ObjectModel: {foreignKey: {association: '_SiteCategory'}}
      _SiteCategory,
      _SiteMasterAdminFields,
      _SiteInventory
      
}
where
     PlantCategory = 'A'
  or PlantCategory = 'B'
```
