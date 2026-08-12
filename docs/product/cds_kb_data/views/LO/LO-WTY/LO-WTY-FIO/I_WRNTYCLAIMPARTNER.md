---
name: I_WRNTYCLAIMPARTNER
description: "Wrntyclaimpartner"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - partner
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMPARTNER

**Wrntyclaimpartner**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WrntyClaimPartnerUUID` | ✓ | |  | `pguid` |  |  |
| `WrntyPartRole` | ✓ | |  | `cast(parvw as parvw_unv preserving type )` |  |  |
| `Partner` | ✓ | |  | `parnr` |  |  |
| `WarrantyInternalNumber` | ✓ | |  | `counter` |  |  |
| `WrntyClaimHeaderUUID` |  | |  | `header_guid` |  |  |
| `WrntyAddress` |  | |  | `adrnr` |  |  |
| `WrntyPartTimezone` |  | |  | `tzonsp` |  |  |
| `ValidToDateTime` |  | |  | `timstmp` |  |  |
| `WrntyClaimCreationDate` |  | |  | `creadat` |  |  |
| `CreatedByUser` |  | |  | `creaby` |  |  |
| `WrntyClaimChangedDate` |  | |  | `chngdat` |  |  |
| `LastChangedByUser` |  | |  | `chngby` |  |  |
| `WrntyHandlingNumber` |  | |  | `ref_handle` |  |  |
| `DataControllerSet` |  | | `_Supplier` | `DataControllerSet` |  |  |
| `Supplier` |  | | `_Supplier` | `Supplier` |  |  |
| `_WrntyClaimHeader` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WrntyClaimHeader` | `I_WrntyClaimHeader` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Warrty Claim Partner'
@VDM.viewType: #BASIC //*******Modernization Task********
//@VDM.viewType: #COMPOSITE
@ObjectModel: {
//   representativeKey: 'WrntyClaimPartnerUUID',//Commenting out due to ATC error '@ObjectModel.foreignKey.association missing'--JJ
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #L
   },
   supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                           #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, 
                           #EXTRACTION_DATA_SOURCE]
}
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{ dataExtraction.enabled: true,
             internalName:#LOCAL }
@Analytics.technicalName: 'IWRNTYCLMPNR'
@Consumption.dbHints:[ 'USE_HEX_PLAN' ]
define view entity I_WrntyClaimPartner
  as select from wty_partner_tab
  association [1..1] to I_WrntyClaimHeader as _WrntyClaimHeader on $projection.WrntyClaimHeaderUUID = _WrntyClaimHeader.WrntyClaimHeaderUUID
  association [0..1] to  I_Supplier               as _Supplier               on $projection.Partner = _Supplier.Supplier
{
  key pguid                                     as WrntyClaimPartnerUUID,
  key cast(parvw as parvw_unv preserving type ) as WrntyPartRole,
  key parnr                                     as Partner,
  key counter                                   as WarrantyInternalNumber,
      header_guid                               as WrntyClaimHeaderUUID,
      adrnr                                     as WrntyAddress,
      tzonsp                                    as WrntyPartTimezone,
      timstmp                                   as ValidToDateTime,
      creadat                                   as WrntyClaimCreationDate,
      creaby                                    as CreatedByUser,
      chngdat                                   as WrntyClaimChangedDate,
      chngby                                    as LastChangedByUser,
      ref_handle                                as WrntyHandlingNumber,
      _Supplier.DataControllerSet               as DataControllerSet,     ------BP Performance Blocker Solution: Optional Element missing-----
      _Supplier.Supplier                        as Supplier,
      _WrntyClaimHeader,
      _Supplier
}
```
