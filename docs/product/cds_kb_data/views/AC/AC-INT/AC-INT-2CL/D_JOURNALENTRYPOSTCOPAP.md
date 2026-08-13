---
name: D_JOURNALENTRYPOSTCOPAP
description: "D Journal EntryPOSTCOPAP"
semantic_vi: "View D_JOURNALENTRYPOSTCOPAP hiển thị dữ liệu ghi sổ kế toán sau CO/PA, được sử dụng khi xử lý giao dịch tài chính trong SAP."
keywords:
  - "journal entry"
  - "đơn ghi sổ"
  - "post-co-pa"
  - "sap accounting"
  - "kế toán sap"
  - "financial transaction"
  - "giao dịch tài chính"
  - "sap cds"
  - "cds view"
semantic_en: "The D_JOURNALENTRYPOSTCOPAP view exposes journal entry data for post-CO/PA accounting, which is used when processing financial transactions in SAP."
app_component: AC-INT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - journal-entry
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# D_JOURNALENTRYPOSTCOPAP

**D Journal EntryPOSTCOPAP**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` |  | |  | `kunnr` |  |  |
| `CustomerGroup` |  | |  | `kdgrp` |  |  |
| `CustomerSupplierIndustry` |  | |  | `brsch` |  |  |
| `CustomerSupplierCountry` |  | |  | `land1` |  |  |
| `SalesDistrict` |  | |  | `bzirk` |  |  |
| `SoldProduct` |  | |  | `artnr` |  |  |
| `SoldProductGroup` |  | |  | `matkl` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `BillToParty` |  | |  | `kunre` |  |  |
| `ShipToParty` |  | |  | `kunwe` |  |  |
| `WBSElement` |  | |  | `ps_posid_edit` |  |  |
| `FunctionalArea` |  | |  | `fkber` |  |  |
| `ServiceDocumentType` |  | |  | `fco_srvdoc_type` |  |  |
| `ServiceDocument` |  | |  | `fco_srvdoc_id` |  |  |
| `ServiceDocumentItem` |  | |  | `fco_srvdoc_item_id` |  |  |
| `BillingDocumentType` |  | |  | `fkart` |  |  |
| `SalesOrder` |  | |  | `vbeln_va` |  |  |
| `SalesOrderItem` |  | |  | `posnr_va` |  |  |
| `Plant` |  | |  | `werks_ext` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `_JournalEntryPost` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Journal Entry Profitability Supplement'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@AbapCatalog.extensibility.extensible: true
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_JournalEntryPostCOPAP
{
  //key DummyKey                 :abap.char(1);
      Customer                 :kunnr;
      CustomerGroup            :kdgrp;
      CustomerSupplierIndustry :brsch;
      CustomerSupplierCountry  :land1;
      SalesDistrict            :bzirk;
      SoldProduct              :artnr;
      SoldProductGroup         :matkl;
      SalesOrganization        :vkorg;
      DistributionChannel      :vtweg;
      Division                 :spart;
      BillToParty              :kunre;
      ShipToParty              :kunwe;
      WBSElement               :ps_posid_edit;
      FunctionalArea           :fkber;
      ServiceDocumentType      :fco_srvdoc_type;
      ServiceDocument          :fco_srvdoc_id;
      ServiceDocumentItem      :fco_srvdoc_item_id;
      BillingDocumentType      :fkart;
      SalesOrder               :vbeln_va;
      SalesOrderItem           :posnr_va;
      Plant                    :werks_ext;
      CostCenter               :kostl;
      ProfitCenter             :prctr;
      _JournalEntryPost        : association to parent D_JournalEntryPostGLItemP ;
 
}
```
