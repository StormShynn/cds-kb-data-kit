---
name: I_SALESITEMPROPOSALTYPE
description: "Salesitemproposaltype"
app_component: SD-SLS-2CL
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
  - SD-SLS
  - interface-view
  - item-level
  - component:SD-SLS-2CL
  - lob:Sales & Distribution
---
# I_SALESITEMPROPOSALTYPE

**Salesitemproposaltype**

| Property | Value |
|---|---|
| App Component | `SD-SLS-2CL` |
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
| `SalesItemProposalType` | ✓ | |  | `cast( SalesDocumentType as sales_item_proposal_type preserving type )` |  |  |
| `SalesItemProposalProcgType` |  | |  | `SalesDocumentProcessingType` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
    representativeKey: 'SalesItemProposalType',
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ],
    modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@EndUserText.label: 'Sales Item Proposal Types'
@Analytics: {dataCategory: #DIMENSION}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSITMPRPSLTP'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_SalesItemProposalType as select from I_SalesDocumentType
{
      //key
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      key cast( SalesDocumentType as sales_item_proposal_type preserving type ) as SalesItemProposalType,
      SalesDocumentProcessingType as SalesItemProposalProcgType,

      //association
      _Text
}
where SDDocumentCategory = 'D';
```
