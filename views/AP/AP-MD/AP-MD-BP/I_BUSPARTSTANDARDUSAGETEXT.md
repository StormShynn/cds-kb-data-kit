---
name: I_BUSPARTSTANDARDUSAGETEXT
description: Business PartnerSTANDARDUSAGETEXT
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
  - text-view
  - business-partner
  - text
  - component:AP-MD-BP
  - lob:Other
---
# I_BUSPARTSTANDARDUSAGETEXT

**Business PartnerSTANDARDUSAGETEXT**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BusinessPartnerStandardUsage` | ✓ | |  | `domvalue_l` |  |  |
| `BusPartStandardUsageText` |  | |  | `ddtext` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPSTDUSAGETXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BusinessPartnerStandardUsage'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Texts for I_Businesspartnerstandardusage'
define view I_BusPartStandardUsageText as select from dd07t 
{
 @Semantics.language: true
  key ddlanguage as Language,
      //      @Search.defaultSearchElement: true
  key domvalue_l as BusinessPartnerStandardUsage,
      @Semantics.text: true
      ddtext     as BusPartStandardUsageText  
}
where
  domname = 'XFELD'
```
