---
name: ZC_KITPOC019.DDLS
description: ZC_KITPOC019
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/ndbs-rti/rap-zs4sc-poc/blob/0ac8660a2416d65338b8f61a7162b0f31f8c424a/src/zc_kitpoc019.ddls.asddls
semantic_en: ZC_KITPOC019 — CDS view.
semantic_vi: ZC_KITPOC019 — CDS view dựa trên ZC_KITPOC019.
keywords:
  - kitpoc019
  - businesspartner
  - firstname
  - lastname
  - nickname
  - emailaddress
tags:
  - bo:purchaseorder
---
# ZC_KITPOC019.DDLS

**ZC_KITPOC019**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/ndbs-rti/rap-zs4sc-poc/blob/0ac8660a2416d65338b8f61a7162b0f31f8c424a/src/zc_kitpoc019.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `Businesspartner` | `Businesspartner` |
| `Firstname` | `Firstname` |
| `Lastname` | `Lastname` |
| `Nickname` | `Nickname` |
| `Emailaddress` | `Emailaddress` |

## Source Code

*Source: [https://github.com/ndbs-rti/rap-zs4sc-poc/blob/0ac8660a2416d65338b8f61a7162b0f31f8c424a/src/zc_kitpoc019.ddls.asddls](https://github.com/ndbs-rti/rap-zs4sc-poc/blob/0ac8660a2416d65338b8f61a7162b0f31f8c424a/src/zc_kitpoc019.ddls.asddls)*

```abap
@EndUserText.label: 'ZC_KITPOC019'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.allowExtensions: true
define root view entity ZC_KITPOC019 as projection on ZI_KITPOC019
{
    key Businesspartner,
    Firstname,
    Lastname,
    Nickname,
    Emailaddress
}
```