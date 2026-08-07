---
name: I_SALESITEMPROPOSALTYPE
description: "Salesitemproposaltype"
app_component: SD-SLS-2CL
software_component: SAPSCORE
release_state: released
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
