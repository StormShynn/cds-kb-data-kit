---
name: I_SCHEDGAGRMTPARTNERAPI01
description: "Schedgagrmtpartnerapi 01"
app_component: MM-PUR-OA-SCH-2CL
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
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - partner
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTPARTNERAPI01

**Schedgagrmtpartnerapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
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
| `SchedulingAgreement` | ✓ | |  |  |  |  |
| `SchedulingAgreementItem` | ✓ | |  |  |  |  |
| `PurchasingOrganization` | ✓ | |  |  |  |  |
| `SupplierSubrange` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `PartnerCounter` | ✓ | |  |  |  |  |
| `SchedgAgrmtPartner` |  | |  |  |  |  |
| `SchedgAgrmtPartnerName` |  | |  |  |  |  |
| `SchedgAgrmtCategory` |  | |  |  |  |  |
| `SchedgAgrmtType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplierContact` |  | |  |  |  |  |
| `EmploymentInternalID` |  | |  |  |  |  |
| `PersonWorkAgreement` |  | |  |  |  |  |
| `DefaultPartner` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchasingDocumentType` |  | |  |  |  |  |
| `_SchedgAgrmtHdr` | | ✓ | | | | |
| `_SchedgAgrmtItm` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_PartnerFunctionText` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_PurchasingDocument` | | ✓ | | | | |
| `_PurchasingDocumentItem` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierContact` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SchedgAgrmtHdr` | `I_SchedgagrmthdrApi01` | [1..1] |
| `_SchedgAgrmtItm` | `I_SchedgAgrmtItmApi01` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #COMPOSITE
@EndUserText.label: 'Scheduling Agreement Partners'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view entity I_SchedgAgrmtPartnerAPI01
  as select from I_SchedgAgrmtPartner
  association [1..1] to I_SchedgagrmthdrApi01 as _SchedgAgrmtHdr on $projection.SchedulingAgreement = _SchedgAgrmtHdr.SchedulingAgreement
  association [0..1] to I_SchedgAgrmtItmApi01 as _SchedgAgrmtItm on  _SchedgAgrmtItm.SchedulingAgreement     = $projection.SchedulingAgreement
                                                            and _SchedgAgrmtItm.SchedulingAgreementItem = $projection.SchedulingAgreementItem
{
  key SchedulingAgreement,
  key SchedulingAgreementItem,
  key PurchasingOrganization,
  key SupplierSubrange,
  key Plant,
  key PartnerFunction,
  key PartnerCounter,
      SchedgAgrmtPartner,
      SchedgAgrmtPartnerName,
      SchedgAgrmtCategory,
      SchedgAgrmtType,
      CreatedByUser,
      CreationDate,
      Supplier,
      SupplierContact,
      EmploymentInternalID,
      PersonWorkAgreement,
      DefaultPartner,
      PurchasingGroup,
      PurchasingDocumentType,
      _PartnerFunction,
      _PartnerFunctionText,
      _PersonWorkAgreement,
      _Plant,
      _PurchasingDocument,
      _PurchasingDocumentItem,
      _PurchasingOrganization,
      _Supplier,
      _SupplierContact,
      _SchedgAgrmtHdr,
      _SchedgAgrmtItm
}
```
