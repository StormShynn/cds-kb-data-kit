---
name: I_GRANTEEMGMTBILLINGRULE
description: "Grantee Management Billing Rule"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBILLINGRULE')/$value
semantic_en: "Grantee Management Billing Rule"
semantic_vi: "Grantee Management Billing Rule — CDS view giao diện dựa trên gmbr."
keywords:
  - "grantee"
  - "management"
  - "billing"
  - "rule"
  - "mgmt"
  - "gtee"
  - "manual"
  - "allowed"
tags:
  - PSM
  - billing
  - bo:billingdocument
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_GRANTEEMGMTBILLINGRULE

**Grantee Management Billing Rule**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBILLINGRULE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GranteeMgmtBillingRule` | ✓ | |  | `billing_rule` | `NUMC(4)` | Rule Used as a Basis for Billing |
| `GteeMManualBillingIsAllowed` |  | |  | `manual_billing` | `CHAR(1)` | Allow Manual Billing Indicator |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_GranteeMgmtBillingRuleText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBILLINGRULE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBILLINGRULE')/$value)*

```abap
@EndUserText.label: 'Grantee Management Billing Rule'

@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
     representativeKey: 'GranteeMgmtBillingRule',
     usageType: {
         dataClass: #CUSTOMIZING,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [
       #ANALYTICAL_DIMENSION,
       #CDS_MODELING_ASSOCIATION_TARGET,
       #CDS_MODELING_DATA_SOURCE,
       #SQL_DATA_SOURCE
     ],
     modelingPattern: #ANALYTICAL_DIMENSION     
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@AbapCatalog.sqlViewName: 'IGMBILLINGRULE'
@Metadata.ignorePropagatedAnnotations: true
define view I_GranteeMgmtBillingRule as select from gmbr

association [0..*] to I_GranteeMgmtBillingRuleText as _Text
    on $projection.GranteeMgmtBillingRule = _Text.GranteeMgmtBillingRule 
{
    
  @ObjectModel.text.association: '_Text'
  key billing_rule as GranteeMgmtBillingRule,
  manual_billing as GteeMManualBillingIsAllowed,
  _Text
}
```
