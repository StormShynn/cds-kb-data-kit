---
name: I_ACCOUNTINGTRANSFERSTATUS
description: "Accountingtransferstatus"
semantic_vi: "View I_ACCOUNTINGTRANSFERSTATUS cung cấp thông tin trạng thái chuyển đổi kế toán cho các quy trình kinh doanh mua bán và phân phối."
keywords:
  - "accounting transfer status"
  - "trạng thái chuyển đổi kế toán"
  - "sales and distribution"
  - "mua bán và phân phối"
  - "sap sd-bil-gf-2cl"
  - "interface view"
  - "status"
  - "sales"
  - "distribution"
  - "accounting"
  - "transfer"
semantic_en: "The I_ACCOUNTINGTRANSFERSTATUS view provides accounting transfer status information for use in sales and distribution business processes."
app_component: SD-BIL-GF-2CL
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
  - SD
  - SD-BIL
  - SD-BIL-GF
  - interface-view
  - status
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
---
# I_ACCOUNTINGTRANSFERSTATUS

**Accountingtransferstatus**

| Property | Value |
|---|---|
| App Component | `SD-BIL-GF-2CL` |
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
| `AccountingTransferStatus` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AccountingTransferStatusText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'BillingDocAcctgTransferStatus'
@ObjectModel.representativeKey: 'AccountingTransferStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern:         #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER,
                                      #SEARCHABLE_ENTITY ]
@EndUserText.label: 'Accounting Transfer Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDACCTTRNSFSTS',
  preserveKey: true
}
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true

define view I_AccountingTransferStatus
as select from dd07l

association [0..*] to I_AccountingTransferStatusText as _Text on $projection.AccountingTransferStatus = _Text.AccountingTransferStatus
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as AccountingTransferStatus,
    
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,

    //Associations
    _Text
}
where (dd07l.domname = 'RFBSK') and (dd07l.as4local = 'A');
```
