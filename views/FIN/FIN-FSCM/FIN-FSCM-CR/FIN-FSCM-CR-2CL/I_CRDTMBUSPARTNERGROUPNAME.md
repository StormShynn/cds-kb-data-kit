---
name: I_CRDTMBUSPARTNERGROUPNAME
description: CRDTMBusiness PartnerNERGROUPNAME
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
# I_CRDTMBUSPARTNERGROUPNAME

**CRDTMBusiness PartnerNERGROUPNAME**

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
| `Language` | ✓ | |  | `langu` |
| `CrdtMgmtBusPartnerGroupName` |  | |  | `cred_group_txt` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Business Partner Credit Group Name'
//@Analytics: { dataExtraction.enabled: true }
@ObjectModel.dataCategory: #TEXT
@AbapCatalog.sqlViewName: 'ICRDTMBPGRPNAME'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CrdtMgmtBusinessPartnerGroup'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@Search: { searchable: true }                                     
define view I_CrdtMBusPartnerGroupName
  as select from ukm_cust_grp0t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cred_group     as CrdtMgmtBusinessPartnerGroup,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu          as Language,

      @Semantics.text: true
      @Search: { defaultSearchElement: true,
                 fuzzinessThreshold:   0.8,
                 ranking:              #LOW }
      cred_group_txt as CrdtMgmtBusPartnerGroupName,
      _Language
};
```
