---
name: I_PURGCATPARTYAPI01
description: Purgcatpartyapi 01
app_component: SLC-CAT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-CAT
  - interface-view
  - component:SLC-CAT-2CL
  - lob:Other
---
# I_PURGCATPARTYAPI01

**Purgcatpartyapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-CAT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurgCatPartyUUID` | `PurgCatPartyUUID` |
| `PurgCatUUID` | `PurgCatUUID` |
| `SLCParty` | `SLCParty` |
| `SLCPartyType` | `SLCPartyType` |
| `SLCPartyRole` | `SLCPartyRole` |
| `SLCPartyIdentifierType` | `SLCPartyIdentifierType` |
| `EmailAddress` | `EmailAddress` |
| `AuthorizationGroup` | `I_BusinessPartner.AuthorizationGroup` |
| `DataController1` | `I_BusinessPartner.DataController1` |
| `DataController2` | `I_BusinessPartner.DataController2` |
| `DataController3` | `I_BusinessPartner.DataController3` |
| `DataController4` | `I_BusinessPartner.DataController4` |
| `DataController5` | `I_BusinessPartner.DataController5` |
| `DataController6` | `I_BusinessPartner.DataController6` |
| `DataController7` | `I_BusinessPartner.DataController7` |
| `DataController8` | `I_BusinessPartner.DataController8` |
| `DataController9` | `I_BusinessPartner.DataController9` |
| `DataController10` | `I_BusinessPartner.DataController10` |
| `DataControllerSet` | `I_BusinessPartner.DataControllerSet` |
| `BusinessPartner` | `I_BusinessPartner.BusinessPartner` |
| `IsBusinessPurposeCompleted` | `I_BusinessPartner.IsBusinessPurposeCompleted` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPUCPARTYAPI01'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities:
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@EndUserText.label: 'Party Referenced by Purchasing Category'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_PurgCatPartyAPI01
  as select from           I_PurchasingCategoryParty
    left outer to one join I_User            on I_User.UserID = I_PurchasingCategoryParty.SLCParty
    left outer to one join I_BusinessPartner on  I_BusinessPartner.BusinessPartnerUUID =  I_User.BusinessPartnerUUID
                                             and I_BusinessPartner.BusinessPartnerUUID <> hextobin(
      '00000000000000000000000000000000'
    )
{
  key PurgCatPartyUUID,
      PurgCatUUID,
      SLCParty,
      SLCPartyType,
      SLCPartyRole,
      SLCPartyIdentifierType,
      EmailAddress,

      I_BusinessPartner.AuthorizationGroup,

      @Consumption.hidden: true
      @UI.hidden: true
      I_BusinessPartner.DataController1,
      @Consumption.hidden: true
      @UI.hidden: true
      I_BusinessPartner.DataController2,
      @Consumption.hidden: true
      @UI.hidden: true
      I_BusinessPartner.DataController3,
      @Consumption.hidden: true
      @UI.hidden: true
      I_BusinessPartner.DataController4,
      @Consumption.hidden: true
      @UI.hidden: true
      I_BusinessPartner.DataController5,
      @Consumption.hidden: true
      @UI.hidden: true
      I_BusinessPartner.DataController6,
      @Consumption.hidden: true
      @UI.hidden: true
      I_BusinessPartner.DataController7,
      @Consumption.hidden: true
      @UI.hidden: true
      I_BusinessPartner.DataController8,
      @Consumption.hidden: true
      @UI.hidden: true
      I_BusinessPartner.DataController9,
      @Consumption.hidden: true
      @UI.hidden: true
      I_BusinessPartner.DataController10,
      @Consumption.hidden: true
      @UI.hidden: true
      I_BusinessPartner.DataControllerSet,
      @Consumption.hidden: true
      @UI.hidden: true
      I_BusinessPartner.BusinessPartner,

      I_BusinessPartner.IsBusinessPurposeCompleted
}
where
  SLCPartyType = 'E'
```
