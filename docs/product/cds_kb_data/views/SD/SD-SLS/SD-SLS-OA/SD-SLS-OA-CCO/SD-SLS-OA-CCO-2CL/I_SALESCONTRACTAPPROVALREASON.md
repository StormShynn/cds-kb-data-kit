---
name: I_SALESCONTRACTAPPROVALREASON
description: "Salescontractapprovalreason"
app_component: SD-SLS-OA-CCO-2CL
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
  - SD-SLS-OA
  - interface-view
  - sales-contract
  - contract
  - approval
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACTAPPROVALREASON

**Salescontractapprovalreason**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
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
| `SalesContractApprovalReason` | ✓ | |  | `SalesDocApprovalReason` |  |  |
| `_SDApprovalReason` | | ✓ | | | | |
| `_SDApprovalReasonT` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog: {
  preserveKey: true,
  sqlViewName: 'ISDCOAPPRVLRSN',
  compiler.compareFilter: true
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED


@VDM.viewType: #BASIC
@ObjectModel:{
 usageType:{ dataClass: #CUSTOMIZING,
             serviceQuality: #A,
             sizeCategory: #S
 },
representativeKey: 'SalesContractApprovalReason',
supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                         #EXTRACTION_DATA_SOURCE,
                         #SQL_DATA_SOURCE,
                         #CDS_MODELING_DATA_SOURCE,
                         #CDS_MODELING_ASSOCIATION_TARGET,
                         #SEARCHABLE_ENTITY],
modelingPattern:#ANALYTICAL_DIMENSION
}

@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Sales Contract Approval Reason'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'SalesContractApprovalReason'
define view I_SalesContractApprovalReason
  as select from I_SalesDocApprovalReason
{
      @Search.defaultSearchElement: true
  key SalesDocApprovalReason as SalesContractApprovalReason,

      _SDApprovalReason,
      _SDApprovalReasonT

}
where
  SDDocumentCategory = 'G'
```
