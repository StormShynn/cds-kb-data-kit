---
name: I_CRDTMBUSPARTNERGROUP
description: CRDTMBusiness PartnerNERGROUP
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - business-partner
  - partner
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CRDTMBUSPARTNERGROUP

**CRDTMBusiness PartnerNERGROUP**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CrdtMgmtBusinessPartnerGroup` | ✓ | |  | `cred_group` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CrdtMBusPartnerGroupName` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Business Partner Credit Group'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AbapCatalog.sqlViewName: 'ICRDTMBPGROUP'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #BASIC
//@VDM.private: false
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL
@ObjectModel.representativeKey: 'CrdtMgmtBusinessPartnerGroup'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_CrdtMBusPartnerGroup
  as select from ukm_cust_grp
  association [0..*] to I_CrdtMBusPartnerGroupName as _Text on $projection.CrdtMgmtBusinessPartnerGroup = _Text.CrdtMgmtBusinessPartnerGroup
{
      @ObjectModel.text.association: '_Text'
  key cred_group as CrdtMgmtBusinessPartnerGroup,
      _Text
};
```
