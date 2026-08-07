---
name: I_BUSINESSPARTNERSTANDARDUSAGE
description: Business PartnerSTANDARDUSAGE
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - business-partner
  - partner
  - component:AP-MD-BP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERSTANDARDUSAGE

**Business PartnerSTANDARDUSAGE**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerStandardUsage` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartStandardUsageText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPSTDUSAGE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerStandardUsage'
@ObjectModel.representativeKey: 'BusinessPartnerStandardUsage'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Basic View for BP Standard Usage'
define view I_Businesspartnerstandardusage 
as select from dd07l 
association [0..*] to I_BusPartStandardUsageText as _Text on $projection.BusinessPartnerStandardUsage = _Text.BusinessPartnerStandardUsage
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH     
      @ObjectModel.text.association: '_Text'
      @EndUserText.label: 'Birth Date Status'
      key domvalue_l           as BusinessPartnerStandardUsage,
      _Text  
}
where
  domname = 'XFELD'
  and domvalue_l  <> ' ' 
  and  domvalue_l  <> ''
```
