---
name: I_BUSINESSPARTNERADDRESSUSAGE
description: "Business PartnerADDRESSUSAGE"
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
  - address
  - partner
  - component:AP-MD-BP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERADDRESSUSAGE

**Business PartnerADDRESSUSAGE**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `ValidityEndDate` | ✓ | |  | `valid_to` | `DEC(15)` | Validity End of a Business Partner Address Usage |
| `AddressUsage` | ✓ | |  | `adr_kind` | `CHAR(10)` | Address Type |
| `AddressNumber` | ✓ | |  | `addrnumber` | `CHAR(10)` | Address Number |
| `ValidityStartDate` |  | |  | `valid_from` | `DEC(15)` | Validity Start of a Business Partner Address Usage |
| `StandardUsage` |  | |  | `xdfadu` | `CHAR(1)` | Indicator: Standard Address Usage |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPADDRESSUSAGE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@VDM.viewType: #BASIC 
@EndUserText.label: 'Busineess Partner Address Usage Core View'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerAddressUsage'
@Analytics: { dataExtraction: { enabled: true, 
                                delta.changeDataCapture.automatic: true } } 
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE ]                                                                  
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_Businesspartneraddressusage as select from but021_fs 

association[1..1] to I_BusinessPartner as _BusinessPartner on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
{    
    key but021_fs.partner   as BusinessPartner,       
    key but021_fs.valid_to  as ValidityEndDate,     
    key but021_fs.adr_kind  as AddressUsage,   
    key but021_fs.addrnumber as AddressNumber, 
    but021_fs.valid_from    as ValidityStartDate, 
    but021_fs.xdfadu as StandardUsage,
    _BusinessPartner.AuthorizationGroup,
    _BusinessPartner    
}
```
